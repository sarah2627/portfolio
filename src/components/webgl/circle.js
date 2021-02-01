// eslint-disable-next-line no-unused-vars
export default function Circle(x, y, r, c) {
  const canvas = document.getElementById('sandbox');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const ctx = canvas.getContext('2d');

  this.x = x;
  this.y = y;
  this.r = r;
  this.c = c;

  this.dx = Math.floor(Math.random() * 4) + 1;
  this.dx *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
  this.dy = Math.floor(Math.random() * 4) + 1;
  this.dy *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;

  this.draw = () => {
    ctx.beginPath();
    ctx.fillStyle = this.c;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  };

  this.animate = () => {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.r > canvas.width || this.x - this.r < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.r > canvas.height || this.y - this.r < 0) {
      this.dy = -this.dy;
    }

    this.draw();
  };
}
