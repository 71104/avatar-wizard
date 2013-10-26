    function draw(ctx, color) {

      // mouth/9
      ctx.save();

      // mouth/9/fill
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(286.8, 368.4);
      ctx.bezierCurveTo(286.8, 375.0, 282.4, 380.4, 277.0, 380.4);
      ctx.lineTo(242.0, 380.4);
      ctx.bezierCurveTo(236.6, 380.4, 232.2, 375.0, 232.2, 368.4);
      ctx.lineTo(232.2, 366.9);
      ctx.bezierCurveTo(232.2, 360.3, 236.6, 354.9, 242.0, 354.9);
      ctx.lineTo(277.0, 354.9);
      ctx.bezierCurveTo(282.4, 354.9, 286.8, 360.3, 286.8, 366.9);
      ctx.lineTo(286.8, 368.4);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(230, 55, 45)";
      ctx.fill();

      // mouth/9/stroke

      // mouth/9/stroke/Tracciato
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(292.9, 366.7);
      ctx.bezierCurveTo(292.9, 370.7, 289.6, 374.0, 285.6, 374.0);
      ctx.lineTo(233.4, 374.0);
      ctx.bezierCurveTo(229.4, 374.0, 226.1, 370.7, 226.1, 366.7);
      ctx.lineTo(226.1, 366.7);
      ctx.bezierCurveTo(226.1, 362.7, 229.4, 359.5, 233.4, 359.5);
      ctx.lineTo(285.6, 359.5);
      ctx.bezierCurveTo(289.6, 359.5, 292.9, 362.7, 292.9, 366.7);
      ctx.lineTo(292.9, 366.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();

      // mouth/9/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(280.3, 364.9);
      ctx.bezierCurveTo(280.3, 365.9, 279.1, 366.7, 277.7, 366.7);
      ctx.lineTo(241.3, 366.7);
      ctx.bezierCurveTo(239.9, 366.7, 238.7, 365.9, 238.7, 364.9);
      ctx.lineTo(238.7, 364.9);
      ctx.bezierCurveTo(238.7, 363.9, 239.9, 363.1, 241.3, 363.1);
      ctx.lineTo(277.7, 363.1);
      ctx.bezierCurveTo(279.1, 363.1, 280.3, 363.9, 280.3, 364.9);
      ctx.lineTo(280.3, 364.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
