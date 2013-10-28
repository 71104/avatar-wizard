    function draw(ctx, color) {

      var alpha = ctx.globalAlpha;

      // head/1
      ctx.save();

      // head/1/color
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(366.9, 220.9);
      ctx.lineTo(366.9, 355.4);
      ctx.bezierCurveTo(366.9, 376.0, 350.1, 392.6, 329.7, 391.7);
      ctx.lineTo(184.1, 391.7);
      ctx.lineTo(183.9, 391.7);
      ctx.bezierCurveTo(174.0, 392.2, 164.5, 388.4, 157.6, 381.2);
      ctx.bezierCurveTo(150.9, 374.3, 147.2, 365.2, 147.2, 355.4);
      ctx.lineTo(147.2, 220.9);
      ctx.bezierCurveTo(147.2, 200.2, 164.0, 183.4, 184.6, 183.4);
      ctx.lineTo(329.5, 183.4);
      ctx.bezierCurveTo(350.1, 183.4, 366.9, 200.2, 366.9, 220.9);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(239, 182, 134)";
      ctx.fill();

      // head/1/stroke

      // head/1/stroke/effect
      ctx.save();
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(194.2, 381.2);
      ctx.bezierCurveTo(187.5, 374.3, 183.8, 365.2, 183.8, 355.4);
      ctx.lineTo(183.8, 220.9);
      ctx.bezierCurveTo(183.8, 200.2, 200.6, 183.4, 221.3, 183.4);
      ctx.lineTo(182.6, 183.4);
      ctx.bezierCurveTo(162.0, 183.4, 145.2, 200.2, 145.2, 220.9);
      ctx.lineTo(145.2, 355.4);
      ctx.bezierCurveTo(145.2, 365.2, 148.8, 374.3, 155.5, 381.2);
      ctx.bezierCurveTo(162.5, 388.4, 171.9, 392.2, 181.9, 391.7);
      ctx.lineTo(182.1, 391.7);
      ctx.lineTo(217.5, 391.7);
      ctx.bezierCurveTo(208.7, 391.3, 200.5, 387.6, 194.2, 381.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(1, 1, 2)";
      ctx.fill();

      // head/1/stroke/stroke
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();

      // head/1/stroke/stroke/Tracciato
      ctx.moveTo(388.7, 220.9);
      ctx.lineTo(388.7, 355.4);
      ctx.bezierCurveTo(388.7, 387.5, 362.9, 413.5, 331.3, 413.5);
      ctx.bezierCurveTo(330.5, 413.5, 329.8, 413.5, 329.0, 413.5);
      ctx.lineTo(184.6, 413.5);
      ctx.bezierCurveTo(168.4, 414.1, 153.2, 408.0, 142.0, 396.4);
      ctx.bezierCurveTo(131.3, 385.4, 125.4, 370.9, 125.4, 355.4);
      ctx.lineTo(125.4, 220.9);
      ctx.bezierCurveTo(125.4, 188.2, 152.0, 161.7, 184.6, 161.7);
      ctx.lineTo(329.5, 161.7);
      ctx.bezierCurveTo(362.1, 161.7, 388.7, 188.2, 388.7, 220.9);
      ctx.closePath();

      // head/1/stroke/stroke/Tracciato
      ctx.moveTo(366.9, 355.4);
      ctx.lineTo(366.9, 220.9);
      ctx.bezierCurveTo(366.9, 200.2, 350.1, 183.4, 329.5, 183.4);
      ctx.lineTo(184.6, 183.4);
      ctx.bezierCurveTo(164.0, 183.4, 147.2, 200.2, 147.2, 220.9);
      ctx.lineTo(147.2, 355.4);
      ctx.bezierCurveTo(147.2, 365.2, 150.9, 374.3, 157.6, 381.2);
      ctx.bezierCurveTo(164.5, 388.4, 174.0, 392.2, 183.9, 391.7);
      ctx.lineTo(184.1, 391.7);
      ctx.lineTo(329.7, 391.7);
      ctx.bezierCurveTo(350.1, 392.6, 366.9, 376.0, 366.9, 355.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
