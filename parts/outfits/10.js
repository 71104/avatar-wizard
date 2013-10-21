    function draw(ctx, color) {

      var alpha = ctx.globalAlpha;

      // outfits/10
      ctx.save();

      // outfits/10/fill
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(325.2, 413.1);
      ctx.lineTo(188.6, 414.0);
      ctx.lineTo(188.6, 491.1);
      ctx.bezierCurveTo(188.6, 492.1, 188.0, 494.8, 188.4, 498.6);
      ctx.bezierCurveTo(191.3, 498.6, 191.0, 503.5, 193.9, 503.5);
      ctx.bezierCurveTo(194.6, 502.9, 199.5, 505.0, 200.6, 505.0);
      ctx.bezierCurveTo(205.7, 505.0, 209.9, 505.2, 215.0, 505.3);
      ctx.bezierCurveTo(221.8, 505.3, 218.0, 495.5, 224.9, 495.6);
      ctx.bezierCurveTo(232.0, 495.7, 249.6, 512.9, 256.7, 513.0);
      ctx.bezierCurveTo(264.4, 513.1, 272.6, 494.9, 280.3, 494.9);
      ctx.bezierCurveTo(284.1, 494.8, 289.7, 507.7, 293.5, 507.6);
      ctx.bezierCurveTo(304.6, 507.4, 313.5, 497.5, 324.6, 497.5);
      ctx.bezierCurveTo(324.9, 495.9, 325.1, 494.1, 325.2, 492.2);
      ctx.lineTo(325.2, 413.1);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(58, 188, 238)";
      ctx.fill();

      // outfits/10/stroke

      // outfits/10/stroke/Tracciato
      ctx.save();
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(224.9, 495.6);
      ctx.bezierCurveTo(212.6, 488.7, 212.5, 474.5, 212.5, 474.5);
      ctx.lineTo(212.5, 414.0);
      ctx.lineTo(188.6, 414.0);
      ctx.bezierCurveTo(188.6, 414.0, 188.6, 466.8, 188.2, 486.5);
      ctx.bezierCurveTo(188.2, 488.5, 188.1, 500.8, 188.2, 502.4);
      ctx.bezierCurveTo(195.3, 501.8, 206.9, 504.4, 218.0, 503.5);
      ctx.bezierCurveTo(219.6, 502.2, 223.1, 496.7, 224.9, 495.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(1, 1, 2)";
      ctx.fill();

      // outfits/10/stroke/Tracciato
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(295.3, 416.1);
      ctx.bezierCurveTo(295.3, 426.5, 286.8, 435.0, 276.4, 435.0);
      ctx.lineTo(232.4, 435.0);
      ctx.bezierCurveTo(222.0, 435.0, 213.6, 426.5, 213.6, 416.1);
      ctx.lineTo(213.6, 416.1);
      ctx.bezierCurveTo(213.6, 405.7, 222.0, 397.3, 232.4, 397.3);
      ctx.lineTo(276.4, 397.3);
      ctx.bezierCurveTo(286.8, 397.3, 295.3, 405.7, 295.3, 416.1);
      ctx.lineTo(295.3, 416.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(239, 182, 134)";
      ctx.fill();

      // outfits/10/stroke/Tracciato composto
      ctx.beginPath();

      // outfits/10/stroke/Tracciato composto/Tracciato
      ctx.moveTo(166.6, 392.0);
      ctx.lineTo(166.6, 485.3);
      ctx.bezierCurveTo(166.6, 516.2, 191.8, 541.4, 222.8, 541.4);
      ctx.lineTo(289.8, 541.4);
      ctx.bezierCurveTo(320.7, 541.4, 345.9, 516.2, 345.9, 485.3);
      ctx.lineTo(345.9, 392.0);
      ctx.lineTo(166.6, 392.0);
      ctx.closePath();

      // outfits/10/stroke/Tracciato composto/Tracciato
      ctx.moveTo(290.3, 416.1);
      ctx.bezierCurveTo(290.3, 423.8, 284.1, 430.0, 276.4, 430.0);
      ctx.lineTo(232.4, 430.0);
      ctx.bezierCurveTo(224.8, 430.0, 218.6, 423.8, 218.6, 416.1);
      ctx.bezierCurveTo(218.6, 415.4, 218.7, 414.7, 218.8, 414.0);
      ctx.lineTo(290.1, 414.0);
      ctx.bezierCurveTo(290.2, 414.7, 290.3, 415.4, 290.3, 416.1);
      ctx.closePath();

      // outfits/10/stroke/Tracciato composto/Tracciato
      ctx.moveTo(323.9, 485.3);
      ctx.bezierCurveTo(323.9, 504.1, 308.6, 519.4, 289.8, 519.4);
      ctx.lineTo(222.8, 519.4);
      ctx.bezierCurveTo(204.0, 519.4, 188.6, 504.1, 188.6, 485.3);
      ctx.lineTo(188.6, 414.0);
      ctx.lineTo(208.7, 414.0);
      ctx.bezierCurveTo(208.6, 414.7, 208.6, 415.4, 208.6, 416.1);
      ctx.bezierCurveTo(208.6, 429.3, 219.3, 440.0, 232.4, 440.0);
      ctx.lineTo(276.4, 440.0);
      ctx.bezierCurveTo(289.6, 440.0, 300.3, 429.3, 300.3, 416.1);
      ctx.bezierCurveTo(300.3, 415.4, 300.2, 414.7, 300.2, 414.0);
      ctx.lineTo(323.9, 414.0);
      ctx.lineTo(323.9, 485.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();

      // outfits/10/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(185.6, 495.8);
      ctx.bezierCurveTo(185.6, 495.8, 203.4, 518.0, 228.1, 495.8);
      ctx.bezierCurveTo(228.1, 495.8, 251.1, 528.2, 281.6, 495.8);
      ctx.bezierCurveTo(281.6, 495.8, 301.3, 520.4, 327.8, 494.7);
      ctx.lineWidth = 10.0;
      ctx.strokeStyle = "rgb(35, 30, 32)";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
