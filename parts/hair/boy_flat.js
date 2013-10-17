    function draw(ctx) {

      var alpha = ctx.globalAlpha;

      // hair/boy flat
      ctx.save();

      // hair/boy flat/Gruppo
      ctx.save();

      // hair/boy flat/Gruppo/Tracciato
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(90.8, 214.0);
      ctx.bezierCurveTo(90.8, 214.0, 155.8, 302.0, 265.3, 223.0);
      ctx.bezierCurveTo(265.3, 223.0, 285.3, 253.3, 330.8, 242.3);
      ctx.bezierCurveTo(330.8, 242.3, 354.5, 136.2, 217.0, 134.2);
      ctx.bezierCurveTo(82.5, 132.3, 90.8, 214.0, 90.8, 214.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(76, 76, 76)";
      ctx.fill();

      // hair/boy flat/Gruppo/Tracciato
      ctx.globalAlpha = alpha * 0.30;
      ctx.beginPath();
      ctx.moveTo(196.6, 144.9);
      ctx.bezierCurveTo(196.6, 144.9, 107.3, 204.6, 141.0, 246.9);
      ctx.bezierCurveTo(141.0, 246.9, 87.0, 213.7, 91.3, 203.3);
      ctx.bezierCurveTo(95.6, 192.9, 130.3, 126.2, 196.6, 144.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // hair/boy flat/Gruppo/Tracciato composto
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();

      // hair/boy flat/Gruppo/Tracciato composto/Tracciato
      ctx.moveTo(177.0, 266.9);
      ctx.bezierCurveTo(116.9, 266.9, 83.4, 222.4, 82.0, 220.6);
      ctx.bezierCurveTo(80.8, 219.0, 80.1, 217.1, 79.9, 215.1);
      ctx.bezierCurveTo(79.8, 213.9, 77.2, 185.6, 99.9, 160.4);
      ctx.bezierCurveTo(122.2, 135.7, 160.0, 123.2, 212.3, 123.2);
      ctx.bezierCurveTo(213.9, 123.2, 215.5, 123.2, 217.1, 123.2);
      ctx.bezierCurveTo(266.8, 124.0, 302.6, 137.8, 323.6, 164.4);
      ctx.bezierCurveTo(351.2, 199.4, 341.9, 242.9, 341.5, 244.7);
      ctx.bezierCurveTo(340.6, 248.8, 337.5, 252.1, 333.4, 253.0);
      ctx.bezierCurveTo(325.9, 254.8, 318.6, 255.7, 311.6, 255.7);
      ctx.bezierCurveTo(287.8, 255.7, 272.1, 245.4, 263.7, 237.6);
      ctx.bezierCurveTo(234.2, 257.1, 205.1, 266.9, 177.0, 266.9);
      ctx.closePath();

      // hair/boy flat/Gruppo/Tracciato composto/Tracciato
      ctx.moveTo(101.7, 209.9);
      ctx.bezierCurveTo(109.1, 218.3, 135.7, 244.9, 177.0, 244.9);
      ctx.bezierCurveTo(203.0, 244.9, 230.5, 234.6, 258.9, 214.1);
      ctx.bezierCurveTo(261.4, 212.3, 264.4, 211.5, 267.4, 212.1);
      ctx.bezierCurveTo(270.3, 212.7, 272.9, 214.4, 274.5, 216.9);
      ctx.bezierCurveTo(275.4, 218.1, 286.8, 233.7, 311.6, 233.7);
      ctx.bezierCurveTo(314.7, 233.7, 317.8, 233.5, 321.0, 233.1);
      ctx.bezierCurveTo(322.0, 221.5, 321.7, 197.4, 306.2, 177.9);
      ctx.bezierCurveTo(289.5, 156.8, 259.4, 145.9, 216.8, 145.2);
      ctx.bezierCurveTo(215.3, 145.2, 213.8, 145.2, 212.3, 145.2);
      ctx.bezierCurveTo(167.4, 145.2, 134.3, 155.4, 116.5, 174.8);
      ctx.bezierCurveTo(103.8, 188.7, 101.9, 203.6, 101.7, 209.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(34, 30, 31)";
      ctx.fill();

      // hair/boy flat/Gruppo/Tracciato
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(259.5, 159.7);
      ctx.bezierCurveTo(259.5, 159.7, 304.1, 170.2, 312.7, 219.7);
      ctx.bezierCurveTo(312.7, 219.7, 293.0, 179.2, 259.5, 159.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
