    function draw(ctx, color) {

      var alpha = ctx.globalAlpha;

      // hair/1
      ctx.save();

      // hair/1/fill
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(388.2, 208.5);
      ctx.bezierCurveTo(387.9, 201.1, 381.8, 195.0, 376.2, 185.8);
      ctx.bezierCurveTo(378.3, 187.1, 381.0, 187.3, 383.3, 186.1);
      ctx.bezierCurveTo(386.7, 184.3, 387.9, 180.1, 386.1, 176.8);
      ctx.bezierCurveTo(369.4, 146.1, 332.1, 136.6, 315.1, 133.8);
      ctx.bezierCurveTo(319.1, 123.4, 323.7, 119.5, 324.3, 119.0);
      ctx.bezierCurveTo(326.9, 117.4, 327.9, 114.4, 327.1, 111.5);
      ctx.bezierCurveTo(326.3, 108.6, 323.5, 106.6, 320.5, 106.5);
      ctx.bezierCurveTo(226.7, 103.7, 172.4, 135.6, 156.5, 146.7);
      ctx.lineTo(136.1, 128.5);
      ctx.bezierCurveTo(134.0, 126.6, 131.1, 126.2, 128.5, 127.3);
      ctx.bezierCurveTo(126.0, 128.4, 124.4, 130.9, 124.4, 133.6);
      ctx.lineTo(124.4, 188.9);
      ctx.bezierCurveTo(124.4, 190.9, 124.9, 274.5, 125.2, 275.9);
      ctx.bezierCurveTo(125.4, 277.1, 125.5, 278.1, 125.4, 279.1);
      ctx.bezierCurveTo(126.9, 287.4, 140.2, 287.6, 140.2, 287.6);
      ctx.bezierCurveTo(140.2, 287.6, 141.0, 253.5, 154.1, 226.0);
      ctx.bezierCurveTo(155.1, 224.0, 156.1, 222.1, 157.1, 220.3);
      ctx.bezierCurveTo(157.3, 220.0, 157.5, 219.6, 157.7, 219.3);
      ctx.bezierCurveTo(157.7, 219.2, 157.7, 219.1, 157.8, 219.1);
      ctx.bezierCurveTo(157.9, 218.9, 158.0, 218.8, 158.0, 218.6);
      ctx.bezierCurveTo(163.4, 209.3, 168.9, 203.0, 174.3, 201.9);
      ctx.bezierCurveTo(188.7, 199.0, 228.0, 196.3, 265.7, 195.7);
      ctx.bezierCurveTo(320.8, 194.8, 342.0, 198.6, 345.9, 201.0);
      ctx.bezierCurveTo(348.4, 202.6, 351.0, 206.4, 353.6, 211.8);
      ctx.bezierCurveTo(365.8, 240.5, 366.2, 276.8, 366.2, 276.8);
      ctx.bezierCurveTo(366.2, 276.8, 388.5, 275.6, 388.5, 266.7);
      ctx.bezierCurveTo(388.6, 264.5, 388.6, 218.1, 388.2, 208.5);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(28, 22, 13)";
      ctx.fill();

      // hair/1/stroke

      // hair/1/stroke/Tracciato
      ctx.save();
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(252.9, 165.0);
      ctx.bezierCurveTo(314.3, 143.7, 366.2, 171.7, 366.2, 171.7);
      ctx.bezierCurveTo(324.3, 115.6, 252.9, 165.0, 252.9, 165.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // hair/1/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(310.9, 129.3);
      ctx.bezierCurveTo(310.9, 129.3, 249.3, 90.5, 207.1, 158.3);
      ctx.bezierCurveTo(207.1, 158.3, 249.1, 123.3, 310.9, 129.3);
      ctx.closePath();
      ctx.fill();

      // hair/1/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(133.6, 144.3);
      ctx.bezierCurveTo(147.4, 151.1, 149.4, 166.4, 149.4, 166.4);
      ctx.bezierCurveTo(160.4, 138.3, 133.6, 144.3, 133.6, 144.3);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
