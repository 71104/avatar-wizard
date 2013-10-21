    function draw(ctx, color) {

      var alpha = ctx.globalAlpha;

      // hair/7
      ctx.save();

      // hair/7/fill
      ctx.save();

      // hair/7/fill/Tracciato
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(255.8, 12.3);
      ctx.bezierCurveTo(287.1, 12.3, 312.5, 43.7, 312.5, 82.5);
      ctx.bezierCurveTo(312.5, 121.4, 287.1, 152.8, 255.8, 152.8);
      ctx.bezierCurveTo(224.5, 152.8, 199.1, 121.4, 199.1, 82.5);
      ctx.bezierCurveTo(199.1, 43.7, 224.5, 12.3, 255.8, 12.3);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(51, 51, 51)";
      ctx.fill();

      // hair/7/fill/Tracciato
      ctx.beginPath();
      ctx.moveTo(315.2, 133.8);
      ctx.bezierCurveTo(408.1, 134.2, 401.1, 239.8, 401.1, 239.8);
      ctx.bezierCurveTo(241.7, 303.1, 110.4, 239.5, 110.4, 239.5);
      ctx.bezierCurveTo(110.4, 239.5, 108.0, 133.5, 200.2, 133.8);
      ctx.lineTo(315.2, 133.8);
      ctx.closePath();
      ctx.fill();

      // hair/7/fill/Tracciato
      ctx.beginPath();
      ctx.moveTo(380.9, 280.5);
      ctx.bezierCurveTo(380.9, 280.5, 398.9, 313.9, 433.8, 315.3);
      ctx.bezierCurveTo(433.8, 315.3, 416.5, 343.4, 383.3, 339.6);
      ctx.fillStyle = color || "rgb(38, 38, 38)";
      ctx.fill();

      // hair/7/fill/Tracciato
      ctx.beginPath();
      ctx.moveTo(132.3, 280.5);
      ctx.bezierCurveTo(132.3, 280.5, 114.3, 313.9, 79.4, 315.3);
      ctx.bezierCurveTo(79.4, 315.3, 96.7, 343.4, 129.9, 339.6);
      ctx.fill();

      // hair/7/stroke
      ctx.restore();

      // hair/7/stroke/Tracciato
      ctx.save();
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(243.8, 99.7);
      ctx.bezierCurveTo(243.8, 99.7, 213.3, 18.3, 267.0, 20.3);
      ctx.bezierCurveTo(267.0, 20.3, 232.5, 16.0, 225.0, 24.0);
      ctx.bezierCurveTo(217.5, 32.0, 195.1, 76.3, 199.1, 98.5);
      ctx.bezierCurveTo(203.2, 120.7, 217.0, 105.0, 217.0, 105.0);
      ctx.lineTo(243.8, 99.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(1, 1, 2)";
      ctx.fill();

      // hair/7/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(203.9, 140.5);
      ctx.bezierCurveTo(203.9, 140.5, 158.0, 148.8, 164.5, 258.5);
      ctx.bezierCurveTo(164.5, 258.5, 110.7, 243.5, 110.4, 235.3);
      ctx.bezierCurveTo(110.0, 227.0, 122.2, 118.5, 203.9, 140.5);
      ctx.closePath();
      ctx.fill();

      // hair/7/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(221.3, 141.8);
      ctx.bezierCurveTo(221.3, 141.8, 189.4, 150.8, 191.1, 223.2);
      ctx.bezierCurveTo(191.1, 223.2, 198.0, 149.3, 250.6, 137.6);
      ctx.fill();

      // hair/7/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(330.5, 151.7);
      ctx.bezierCurveTo(330.5, 151.7, 379.8, 163.5, 377.8, 229.2);
      ctx.bezierCurveTo(377.8, 229.2, 359.8, 167.2, 330.5, 151.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // hair/7/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(272.5, 37.8);
      ctx.bezierCurveTo(272.5, 37.8, 289.9, 53.2, 289.9, 67.5);
      ctx.bezierCurveTo(289.8, 81.8, 260.2, 30.8, 272.5, 37.8);
      ctx.closePath();
      ctx.fill();

      // hair/7/stroke/Tracciato composto
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();

      // hair/7/stroke/Tracciato composto/Tracciato
      ctx.moveTo(255.8, 160.8);
      ctx.bezierCurveTo(220.1, 160.8, 191.1, 125.7, 191.1, 82.5);
      ctx.bezierCurveTo(191.1, 39.4, 220.1, 4.3, 255.8, 4.3);
      ctx.bezierCurveTo(291.5, 4.3, 320.5, 39.4, 320.5, 82.5);
      ctx.bezierCurveTo(320.5, 125.7, 291.5, 160.8, 255.8, 160.8);
      ctx.closePath();

      // hair/7/stroke/Tracciato composto/Tracciato
      ctx.moveTo(255.8, 20.3);
      ctx.bezierCurveTo(229.0, 20.3, 207.1, 48.2, 207.1, 82.5);
      ctx.bezierCurveTo(207.1, 116.9, 229.0, 144.8, 255.8, 144.8);
      ctx.bezierCurveTo(282.7, 144.8, 304.5, 116.9, 304.5, 82.5);
      ctx.bezierCurveTo(304.5, 48.2, 282.7, 20.3, 255.8, 20.3);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();

      // hair/7/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(307.8, 122.1);
      ctx.bezierCurveTo(307.8, 134.0, 298.1, 143.7, 286.2, 143.7);
      ctx.lineTo(225.4, 143.7);
      ctx.bezierCurveTo(213.5, 143.7, 203.9, 134.0, 203.9, 122.1);
      ctx.lineTo(203.9, 122.1);
      ctx.bezierCurveTo(203.9, 110.2, 213.5, 100.6, 225.4, 100.6);
      ctx.lineTo(286.2, 100.6);
      ctx.bezierCurveTo(298.1, 100.6, 307.8, 110.2, 307.8, 122.1);
      ctx.lineTo(307.8, 122.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // hair/7/stroke/Tracciato composto
      ctx.beginPath();

      // hair/7/stroke/Tracciato composto/Tracciato
      ctx.moveTo(286.2, 151.7);
      ctx.lineTo(225.4, 151.7);
      ctx.bezierCurveTo(209.1, 151.7, 195.9, 138.4, 195.9, 122.1);
      ctx.bezierCurveTo(195.9, 105.8, 209.1, 92.6, 225.4, 92.6);
      ctx.lineTo(286.2, 92.6);
      ctx.bezierCurveTo(302.5, 92.6, 315.8, 105.8, 315.8, 122.1);
      ctx.bezierCurveTo(315.8, 138.4, 302.5, 151.7, 286.2, 151.7);
      ctx.closePath();

      // hair/7/stroke/Tracciato composto/Tracciato
      ctx.moveTo(225.4, 108.6);
      ctx.bezierCurveTo(217.9, 108.6, 211.9, 114.7, 211.9, 122.1);
      ctx.bezierCurveTo(211.9, 129.6, 217.9, 135.7, 225.4, 135.7);
      ctx.lineTo(286.2, 135.7);
      ctx.bezierCurveTo(293.7, 135.7, 299.8, 129.6, 299.8, 122.1);
      ctx.bezierCurveTo(299.8, 114.7, 293.7, 108.6, 286.2, 108.6);
      ctx.lineTo(225.4, 108.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();

      // hair/7/stroke/Tracciato composto
      ctx.beginPath();

      // hair/7/stroke/Tracciato composto/Tracciato
      ctx.moveTo(255.3, 275.9);
      ctx.bezierCurveTo(168.1, 275.9, 109.3, 247.9, 106.9, 246.7);
      ctx.bezierCurveTo(104.2, 245.4, 102.4, 242.7, 102.4, 239.7);
      ctx.bezierCurveTo(102.3, 237.4, 101.5, 184.5, 133.9, 151.4);
      ctx.bezierCurveTo(150.5, 134.4, 172.7, 125.8, 199.7, 125.8);
      ctx.lineTo(200.2, 125.8);
      ctx.lineTo(315.2, 125.8);
      ctx.bezierCurveTo(342.9, 125.9, 365.1, 134.7, 381.2, 152.1);
      ctx.bezierCurveTo(412.4, 185.4, 409.3, 238.1, 409.1, 240.3);
      ctx.bezierCurveTo(408.9, 243.4, 407.0, 246.1, 404.1, 247.2);
      ctx.bezierCurveTo(356.3, 266.2, 306.2, 275.9, 255.3, 275.9);
      ctx.closePath();

      // hair/7/stroke/Tracciato composto/Tracciato
      ctx.moveTo(118.5, 234.3);
      ctx.bezierCurveTo(133.7, 240.7, 185.4, 259.9, 255.3, 259.9);
      ctx.bezierCurveTo(302.4, 259.9, 348.8, 251.2, 393.2, 234.3);
      ctx.bezierCurveTo(393.2, 221.3, 390.8, 185.8, 369.5, 162.9);
      ctx.bezierCurveTo(356.5, 149.0, 338.2, 141.9, 315.2, 141.8);
      ctx.lineTo(199.7, 141.8);
      ctx.bezierCurveTo(177.1, 141.8, 158.8, 148.8, 145.4, 162.6);
      ctx.bezierCurveTo(122.9, 185.5, 119.1, 221.3, 118.5, 234.3);
      ctx.closePath();
      ctx.fill();

      // hair/7/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(389.7, 347.9);
      ctx.bezierCurveTo(387.3, 347.9, 384.9, 347.8, 382.4, 347.5);
      ctx.bezierCurveTo(378.0, 347.0, 374.9, 343.0, 375.4, 338.6);
      ctx.bezierCurveTo(375.9, 334.2, 379.9, 331.1, 384.3, 331.6);
      ctx.bezierCurveTo(399.7, 333.4, 411.2, 326.9, 418.3, 320.8);
      ctx.bezierCurveTo(389.3, 312.4, 374.6, 285.6, 373.8, 284.3);
      ctx.bezierCurveTo(371.8, 280.4, 373.2, 275.5, 377.1, 273.4);
      ctx.bezierCurveTo(381.0, 271.3, 385.8, 272.8, 387.9, 276.6);
      ctx.bezierCurveTo(388.2, 277.1, 404.5, 306.1, 434.2, 307.3);
      ctx.bezierCurveTo(437.0, 307.4, 439.6, 309.0, 440.9, 311.5);
      ctx.bezierCurveTo(442.2, 314.0, 442.1, 317.1, 440.6, 319.5);
      ctx.bezierCurveTo(439.9, 320.7, 422.7, 347.9, 389.7, 347.9);
      ctx.closePath();
      ctx.fill();

      // hair/7/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(123.6, 347.9);
      ctx.bezierCurveTo(90.5, 347.9, 73.3, 320.7, 72.6, 319.5);
      ctx.bezierCurveTo(71.1, 317.1, 71.0, 314.0, 72.3, 311.5);
      ctx.bezierCurveTo(73.7, 309.0, 76.2, 307.4, 79.1, 307.3);
      ctx.bezierCurveTo(108.8, 306.1, 125.1, 276.9, 125.3, 276.6);
      ctx.bezierCurveTo(127.4, 272.8, 132.3, 271.3, 136.1, 273.4);
      ctx.bezierCurveTo(140.0, 275.5, 141.5, 280.4, 139.4, 284.3);
      ctx.bezierCurveTo(138.7, 285.6, 123.9, 312.4, 94.9, 320.8);
      ctx.bezierCurveTo(102.0, 327.0, 113.4, 333.4, 129.0, 331.6);
      ctx.bezierCurveTo(133.4, 331.1, 137.3, 334.3, 137.8, 338.6);
      ctx.bezierCurveTo(138.4, 343.0, 135.2, 347.0, 130.8, 347.5);
      ctx.bezierCurveTo(128.3, 347.8, 125.9, 347.9, 123.6, 347.9);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
