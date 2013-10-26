    function draw(ctx, color) {

      // mouth/8
      ctx.save();

      // mouth/8/fill
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(282.5, 372.3);
      ctx.bezierCurveTo(282.5, 379.0, 277.0, 384.5, 270.3, 384.5);
      ctx.lineTo(249.7, 384.5);
      ctx.bezierCurveTo(243.0, 384.5, 237.5, 379.0, 237.5, 372.3);
      ctx.lineTo(237.5, 372.3);
      ctx.bezierCurveTo(237.5, 365.5, 243.0, 360.0, 249.7, 360.0);
      ctx.lineTo(270.3, 360.0);
      ctx.bezierCurveTo(277.0, 360.0, 282.5, 365.5, 282.5, 372.3);
      ctx.lineTo(282.5, 372.3);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(228, 59, 45)";
      ctx.fill();

      // mouth/8/stroke
      ctx.beginPath();
      ctx.moveTo(260.2, 376.5);
      ctx.bezierCurveTo(238.1, 376.5, 222.0, 371.1, 221.0, 370.8);
      ctx.bezierCurveTo(219.5, 370.3, 218.6, 368.6, 219.2, 367.0);
      ctx.bezierCurveTo(219.7, 365.4, 221.4, 364.6, 223.0, 365.1);
      ctx.bezierCurveTo(223.3, 365.2, 258.7, 377.0, 296.1, 365.1);
      ctx.bezierCurveTo(297.7, 364.6, 299.4, 365.5, 299.9, 367.1);
      ctx.bezierCurveTo(300.4, 368.6, 299.5, 370.3, 297.9, 370.8);
      ctx.bezierCurveTo(284.5, 375.1, 271.6, 376.5, 260.2, 376.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
    }
