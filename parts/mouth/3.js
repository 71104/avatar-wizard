    function draw(ctx, color) {

      // mouth/3
      ctx.save();

      // mouth/3/stroke
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(289.5, 375.2);
      ctx.lineTo(230.3, 375.2);
      ctx.bezierCurveTo(228.9, 375.2, 227.6, 374.4, 226.9, 373.1);
      ctx.lineTo(223.7, 367.0);
      ctx.bezierCurveTo(222.7, 365.1, 223.4, 362.8, 225.3, 361.8);
      ctx.bezierCurveTo(227.1, 360.8, 229.5, 361.6, 230.4, 363.4);
      ctx.lineTo(232.6, 367.5);
      ctx.lineTo(286.9, 367.5);
      ctx.lineTo(288.4, 363.8);
      ctx.bezierCurveTo(289.2, 361.8, 291.4, 360.9, 293.4, 361.7);
      ctx.bezierCurveTo(295.3, 362.4, 296.3, 364.7, 295.5, 366.6);
      ctx.lineTo(293.1, 372.8);
      ctx.bezierCurveTo(292.5, 374.2, 291.1, 375.2, 289.5, 375.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }
