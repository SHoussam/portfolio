import { useEffect, useRef } from "react";

const vertexShaderSource = `
attribute vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const fragmentShaderSource = `
precision mediump float;

uniform vec2 iResolution;
uniform float iTime;

float wave(float x, float y) {
  return sin(10.0 * x + 10.0 * y) / 5.0 +
         sin(20.0 * x + 15.0 * y) / 3.0 +
         sin(4.0 * x + 10.0 * y) / -4.0 +
         sin(y) / 2.0 +
         sin(x * x * y * 20.0) +
         sin(x * 20.0 + 4.0) / 5.0 +
         sin(y * 30.0) / 5.0 +
         sin(x) / 4.0;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 uv = fragCoord / iResolution.xy;

  float z = wave(uv.x, uv.y) + 2.0;
  z *= 4.0 * sin(1.57 + iTime / 5.0);

  float d = fract(z);
  if (mod(z, 2.0) > 1.0) {
    d = 1.0 - d;
  }

  d = d / fwidth(z);
  fragColor = vec4(vec3(d), 1.0);
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) {
    return null;
  }

  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(gl) {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  if (!vertexShader || !fragmentShader) {
    if (vertexShader) gl.deleteShader(vertexShader);
    if (fragmentShader) gl.deleteShader(fragmentShader);
    return null;
  }

  const program = gl.createProgram();
  if (!program) {
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    return null;
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

export default function HeroWaveShader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const gl = canvas.getContext("webgl", { alpha: true, antialias: true });
    if (!gl) return undefined;

    const program = createProgram(gl);
    if (!program) return undefined;

    const positionBuffer = gl.createBuffer();
    if (!positionBuffer) {
      gl.deleteProgram(program);
      return undefined;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    const resolutionLocation = gl.getUniformLocation(program, "iResolution");
    const timeLocation = gl.getUniformLocation(program, "iTime");

    let animationId = 0;
    const start = performance.now();

    const render = (now) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.floor(canvas.clientWidth * dpr);
      const height = Math.floor(canvas.clientHeight * dpr);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

      if (positionLocation >= 0) {
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
      }

      if (resolutionLocation) {
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      }

      if (timeLocation) {
        gl.uniform1f(timeLocation, (now - start) * 0.001);
      }

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <div className="hero-wave-layer" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
