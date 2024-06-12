import type { Point, Branch } from "../types/canvas-bg";

const canvasId = "backGroundCanvas";
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D | null;
let pendingTasks: Function[] = [];
let framesCount = 0;

const setCanvasSize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const getCanvasCTX = () => {
  if (!ctx) {
    setCanvasSize();
    ctx = canvas.getContext("2d");
  }
  return ctx;
};

const initCanvas = () => {
  canvas = document.getElementById(canvasId) as HTMLCanvasElement;
  if (!canvas) {
    throw new Error(`Element with ID ${canvasId} not found`);
  }
  setCanvasSize();
  ctx = canvas.getContext("2d");
};

export function init() {
  initCanvas();
  if (ctx) {
    ctx.strokeStyle = "#88888825";
  }

  step({
    start: { x: 0, y: 0 },
    length: 10,
    theta: Math.PI / 4,
  });

  step({
    start: { x: 2000, y: 0 },
    length: 5,
    theta: Math.PI / 2,
  });
}

function step(b: Branch, depth = 0) {
  const end = getEndPoint(b);
  drawBranch(b);

  if (depth < 4 || Math.random() < 0.5) {
    pendingTasks.push(() =>
      step(
        {
          start: end,
          length: b.length + (Math.random() * 2 - 1),
          theta: b.theta - 0.2 * Math.random(),
        },
        depth + 1,
      ),
    );
  }
  if (depth < 4 || Math.random() < 0.5) {
    pendingTasks.push(() =>
      step(
        {
          start: end,
          length: b.length + (Math.random() * 2 - 1),
          theta: b.theta + 0.2 * Math.random(),
        },
        depth + 1,
      ),
    );
  }
}

function frame() {
  const tasks: Function[] = [];
  pendingTasks = pendingTasks.filter((task) => {
    if (Math.random() > 0.4) {
      tasks.push(task);
      return false;
    }
    return true;
  });
  tasks.forEach((task) => task());
}

function startFrame() {
  requestAnimationFrame(() => {
    framesCount += 1;
    if (framesCount % 3 === 0) frame();
    startFrame();
  });
}

startFrame();

function lineTo(p1: Point, p2: Point) {
  if (!ctx) return;

  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
}

function getEndPoint(b: Branch): Point {
  return {
    x: b.start.x + b.length * Math.cos(b.theta),
    y: b.start.y + b.length * Math.sin(b.theta),
  };
}

function drawBranch(b: Branch) {
  lineTo(b.start, getEndPoint(b));
}
