    function draw(ctx) {

      // shadow/1
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(361.8, 537.2);
      ctx.bezierCurveTo(361.8, 544.0, 313.8, 549.5, 254.5, 549.5);
      ctx.bezierCurveTo(195.2, 549.5, 147.2, 544.0, 147.2, 537.2);
      ctx.bezierCurveTo(147.2, 530.4, 195.2, 524.8, 254.5, 524.8);
      ctx.bezierCurveTo(313.8, 524.8, 361.8, 530.4, 361.8, 537.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(188, 190, 192)";
      ctx.fill();
      ctx.restore();
    }
