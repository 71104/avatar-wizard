    function draw(ctx, color) {

      var alpha = ctx.globalAlpha;

      // hair/10
      ctx.save();

      // hair/10/fill
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(136.4, 218.3);
      ctx.bezierCurveTo(136.4, 218.3, 201.4, 306.3, 310.9, 227.3);
      ctx.bezierCurveTo(310.9, 227.3, 330.8, 257.6, 376.3, 246.6);
      ctx.bezierCurveTo(376.3, 246.6, 400.0, 140.5, 262.5, 138.5);
      ctx.bezierCurveTo(128.0, 136.5, 136.4, 218.3, 136.4, 218.3);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(78, 77, 77)";
      ctx.fill();

      // hair/10/stroke

      // hair/10/stroke/Tracciato
      ctx.save();
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(242.2, 149.2);
      ctx.bezierCurveTo(242.2, 149.2, 152.8, 208.8, 186.5, 251.2);
      ctx.bezierCurveTo(186.5, 251.2, 132.5, 218.0, 136.8, 207.6);
      ctx.bezierCurveTo(141.2, 197.2, 175.8, 130.5, 242.2, 149.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(1, 1, 2)";
      ctx.fill();

      // hair/10/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(305.0, 164.0);
      ctx.bezierCurveTo(305.0, 164.0, 349.6, 174.5, 358.3, 224.0);
      ctx.bezierCurveTo(358.3, 224.0, 338.5, 183.5, 305.0, 164.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // hair/10/stroke/stroke
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();

      // hair/10/stroke/stroke/Tracciato
      ctx.moveTo(222.5, 271.2);
      ctx.bezierCurveTo(162.5, 271.2, 128.9, 226.7, 127.5, 224.8);
      ctx.bezierCurveTo(126.3, 223.2, 125.6, 221.4, 125.4, 219.4);
      ctx.bezierCurveTo(125.3, 218.2, 122.7, 189.8, 145.4, 164.7);
      ctx.bezierCurveTo(167.7, 140.0, 205.5, 127.5, 257.8, 127.5);
      ctx.bezierCurveTo(259.4, 127.5, 261.0, 127.5, 262.7, 127.5);
      ctx.bezierCurveTo(312.3, 128.2, 348.1, 142.1, 369.1, 168.7);
      ctx.bezierCurveTo(396.8, 203.7, 387.5, 247.2, 387.1, 249.0);
      ctx.bezierCurveTo(386.1, 253.1, 383.0, 256.3, 378.9, 257.3);
      ctx.bezierCurveTo(371.5, 259.1, 364.1, 260.0, 357.1, 260.0);
      ctx.bezierCurveTo(333.3, 260.0, 317.6, 249.6, 309.2, 241.8);
      ctx.bezierCurveTo(279.7, 261.3, 250.6, 271.2, 222.5, 271.2);
      ctx.closePath();

      // hair/10/stroke/stroke/Tracciato
      ctx.moveTo(147.3, 214.2);
      ctx.bezierCurveTo(154.6, 222.5, 181.3, 249.2, 222.5, 249.2);
      ctx.bezierCurveTo(248.5, 249.2, 276.1, 238.8, 304.4, 218.4);
      ctx.bezierCurveTo(306.9, 216.6, 309.9, 215.8, 312.9, 216.4);
      ctx.bezierCurveTo(315.9, 217.0, 318.4, 218.6, 320.0, 221.2);
      ctx.bezierCurveTo(320.9, 222.4, 332.3, 238.0, 357.1, 238.0);
      ctx.bezierCurveTo(360.2, 238.0, 363.3, 237.8, 366.5, 237.3);
      ctx.bezierCurveTo(367.5, 225.7, 367.3, 201.7, 351.7, 182.1);
      ctx.bezierCurveTo(335.0, 161.1, 304.9, 150.1, 262.3, 149.5);
      ctx.bezierCurveTo(260.8, 149.5, 259.3, 149.5, 257.8, 149.5);
      ctx.bezierCurveTo(212.9, 149.5, 179.8, 159.7, 162.0, 179.0);
      ctx.bezierCurveTo(149.3, 192.9, 147.4, 207.9, 147.3, 214.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
