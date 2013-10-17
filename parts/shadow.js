    function draw(ctx) {

      // draw/Tracciato
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(214.7, 12.3);
      ctx.bezierCurveTo(214.7, 19.1, 166.6, 24.7, 107.3, 24.7);
      ctx.bezierCurveTo(48.1, 24.7, 0.0, 19.1, 0.0, 12.3);
      ctx.bezierCurveTo(0.0, 5.5, 48.1, 0.0, 107.3, 0.0);
      ctx.bezierCurveTo(166.6, 0.0, 214.7, 5.5, 214.7, 12.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 191)";
      ctx.fill();
      ctx.restore();
    }
