    function draw(ctx, color) {

      var alpha = ctx.globalAlpha;

      // hands/1
      ctx.save();

      // hands/1/fill
      ctx.save();

      // hands/1/fill/Tracciato
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(391.1, 451.7);
      ctx.bezierCurveTo(391.1, 473.2, 373.7, 490.5, 352.3, 490.5);
      ctx.bezierCurveTo(330.8, 490.5, 313.4, 473.2, 313.4, 451.7);
      ctx.bezierCurveTo(313.4, 430.2, 330.8, 412.8, 352.3, 412.8);
      ctx.bezierCurveTo(373.7, 412.8, 391.1, 430.2, 391.1, 451.7);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(239, 182, 134)";
      ctx.fill();

      // hands/1/fill/Tracciato
      ctx.beginPath();
      ctx.moveTo(200.6, 451.7);
      ctx.bezierCurveTo(200.6, 473.2, 183.2, 490.5, 161.8, 490.5);
      ctx.bezierCurveTo(140.3, 490.5, 122.9, 473.2, 122.9, 451.7);
      ctx.bezierCurveTo(122.9, 430.2, 140.3, 412.8, 161.8, 412.8);
      ctx.bezierCurveTo(183.2, 412.8, 200.6, 430.2, 200.6, 451.7);
      ctx.closePath();
      ctx.fill();

      // hands/1/stroke
      ctx.restore();

      // hands/1/stroke/Tracciato
      ctx.save();
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(350.6, 421.8);
      ctx.bezierCurveTo(350.6, 421.8, 335.0, 437.1, 343.1, 457.1);
      ctx.bezierCurveTo(351.2, 477.2, 372.2, 478.2, 372.9, 479.1);
      ctx.bezierCurveTo(373.5, 480.1, 339.7, 495.2, 327.9, 476.2);
      ctx.bezierCurveTo(316.1, 457.1, 312.1, 447.9, 319.3, 435.8);
      ctx.bezierCurveTo(326.6, 423.6, 334.7, 418.3, 350.6, 421.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(1, 1, 2)";
      ctx.fill();

      // hands/1/stroke/Tracciato composto
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();

      // hands/1/stroke/Tracciato composto/Tracciato
      ctx.moveTo(352.3, 499.4);
      ctx.bezierCurveTo(326.0, 499.4, 304.6, 478.0, 304.6, 451.7);
      ctx.bezierCurveTo(304.6, 425.4, 326.0, 404.0, 352.3, 404.0);
      ctx.bezierCurveTo(378.6, 404.0, 400.0, 425.4, 400.0, 451.7);
      ctx.bezierCurveTo(400.0, 478.0, 378.6, 499.4, 352.3, 499.4);
      ctx.closePath();

      // hands/1/stroke/Tracciato composto/Tracciato
      ctx.moveTo(352.3, 421.7);
      ctx.bezierCurveTo(335.8, 421.7, 322.3, 435.2, 322.3, 451.7);
      ctx.bezierCurveTo(322.3, 468.2, 335.8, 481.7, 352.3, 481.7);
      ctx.bezierCurveTo(368.8, 481.7, 382.3, 468.2, 382.3, 451.7);
      ctx.bezierCurveTo(382.3, 435.2, 368.8, 421.7, 352.3, 421.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();

      // hands/1/stroke/Tracciato
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(160.1, 421.8);
      ctx.bezierCurveTo(160.1, 421.8, 144.5, 437.1, 152.6, 457.1);
      ctx.bezierCurveTo(160.7, 477.2, 181.7, 478.2, 182.4, 479.1);
      ctx.bezierCurveTo(183.0, 480.1, 149.2, 495.2, 137.4, 476.2);
      ctx.bezierCurveTo(125.6, 457.1, 121.6, 447.9, 128.8, 435.8);
      ctx.bezierCurveTo(136.1, 423.6, 144.2, 418.3, 160.1, 421.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(1, 1, 2)";
      ctx.fill();

      // hands/1/stroke/Tracciato composto
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();

      // hands/1/stroke/Tracciato composto/Tracciato
      ctx.moveTo(161.8, 499.4);
      ctx.bezierCurveTo(135.5, 499.4, 114.1, 478.0, 114.1, 451.7);
      ctx.bezierCurveTo(114.1, 425.4, 135.5, 404.0, 161.8, 404.0);
      ctx.bezierCurveTo(188.1, 404.0, 209.5, 425.4, 209.5, 451.7);
      ctx.bezierCurveTo(209.5, 478.0, 188.1, 499.4, 161.8, 499.4);
      ctx.closePath();

      // hands/1/stroke/Tracciato composto/Tracciato
      ctx.moveTo(161.8, 421.7);
      ctx.bezierCurveTo(145.3, 421.7, 131.8, 435.2, 131.8, 451.7);
      ctx.bezierCurveTo(131.8, 468.2, 145.3, 481.7, 161.8, 481.7);
      ctx.bezierCurveTo(178.3, 481.7, 191.8, 468.2, 191.8, 451.7);
      ctx.bezierCurveTo(191.8, 435.2, 178.3, 421.7, 161.8, 421.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
