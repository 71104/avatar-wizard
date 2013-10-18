    function draw(ctx) {

      // shadow/Tracciato
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(422.8, 633.2);
      ctx.bezierCurveTo(422.8, 640.0, 374.8, 645.5, 315.5, 645.5);
      ctx.bezierCurveTo(256.2, 645.5, 208.2, 640.0, 208.2, 633.2);
      ctx.bezierCurveTo(208.2, 626.4, 256.2, 620.8, 315.5, 620.8);
      ctx.bezierCurveTo(374.8, 620.8, 422.8, 626.4, 422.8, 633.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(187, 189, 191)";
      ctx.fill();
      ctx.restore();
    }
