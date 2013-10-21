    function draw(ctx, color) {

      var alpha = ctx.globalAlpha;

      // body/1
      ctx.save();

      // body/1/fill
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(324.7, 414.0);
      ctx.lineTo(324.7, 485.3);
      ctx.bezierCurveTo(324.7, 504.1, 309.4, 519.4, 290.5, 519.4);
      ctx.lineTo(223.6, 519.4);
      ctx.bezierCurveTo(204.7, 519.4, 189.4, 504.1, 189.4, 485.3);
      ctx.lineTo(189.4, 414.0);
      ctx.lineTo(324.7, 414.0);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(239, 182, 134)";
      ctx.fill();

      // body/1/stroke

      // body/1/stroke/tracciato
      ctx.save();
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(217.3, 485.8);
      ctx.bezierCurveTo(217.3, 484.4, 217.3, 431.0, 217.3, 414.0);
      ctx.lineTo(205.8, 414.0);
      ctx.lineTo(189.4, 414.0);
      ctx.lineTo(189.4, 485.3);
      ctx.bezierCurveTo(189.4, 504.1, 204.7, 519.4, 223.6, 519.4);
      ctx.lineTo(249.8, 519.4);
      ctx.bezierCurveTo(220.8, 519.4, 217.3, 487.3, 217.3, 485.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(1, 1, 2)";
      ctx.fill();

      // body/1/stroke/tracciato
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();

      // body/1/stroke/tracciato/Tracciato
      ctx.moveTo(346.7, 392.0);
      ctx.lineTo(346.7, 485.3);
      ctx.bezierCurveTo(346.7, 516.2, 321.5, 541.4, 290.5, 541.4);
      ctx.lineTo(223.6, 541.4);
      ctx.bezierCurveTo(192.6, 541.4, 167.4, 516.2, 167.4, 485.3);
      ctx.lineTo(167.4, 392.0);
      ctx.lineTo(346.7, 392.0);
      ctx.closePath();

      // body/1/stroke/tracciato/Tracciato
      ctx.moveTo(324.7, 485.3);
      ctx.lineTo(324.7, 414.0);
      ctx.lineTo(189.4, 414.0);
      ctx.lineTo(189.4, 485.3);
      ctx.bezierCurveTo(189.4, 504.1, 204.7, 519.4, 223.6, 519.4);
      ctx.lineTo(290.5, 519.4);
      ctx.bezierCurveTo(309.4, 519.4, 324.7, 504.1, 324.7, 485.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
