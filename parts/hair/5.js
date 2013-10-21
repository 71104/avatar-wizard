    function draw(ctx, color) {

      var alpha = ctx.globalAlpha;

      // hair/5
      ctx.save();

      // hair/5/fill
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(436.6, 285.1);
      ctx.bezierCurveTo(432.1, 62.3, 254.0, 125.3, 254.0, 125.3);
      ctx.bezierCurveTo(254.0, 125.3, 85.1, 48.8, 68.1, 272.8);
      ctx.bezierCurveTo(68.1, 272.8, 60.1, 321.0, 72.1, 391.3);
      ctx.lineTo(160.6, 406.2);
      ctx.bezierCurveTo(160.6, 406.2, 122.0, 367.6, 134.4, 236.8);
      ctx.bezierCurveTo(160.5, 249.7, 247.7, 284.1, 365.1, 237.3);
      ctx.bezierCurveTo(382.7, 303.9, 355.1, 406.2, 355.1, 406.2);
      ctx.lineTo(417.1, 388.8);
      ctx.bezierCurveTo(441.1, 349.3, 436.6, 285.1, 436.6, 285.1);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(209, 213, 44)";
      ctx.fill();

      // hair/5/stroke

      // hair/5/stroke/Tracciato
      ctx.save();
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(132.9, 223.5);
      ctx.bezierCurveTo(132.9, 223.5, 56.9, 306.8, 118.9, 395.5);
      ctx.lineTo(157.7, 396.8);
      ctx.bezierCurveTo(157.7, 396.8, 115.9, 320.2, 137.5, 235.2);
      ctx.lineTo(132.9, 223.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(1, 1, 2)";
      ctx.fill();

      // hair/5/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(385.5, 227.8);
      ctx.bezierCurveTo(385.5, 227.8, 438.5, 273.8, 393.5, 387.1);
      ctx.bezierCurveTo(393.5, 387.1, 370.9, 397.8, 371.9, 396.8);
      ctx.bezierCurveTo(372.9, 395.8, 402.2, 260.6, 377.5, 233.2);
      ctx.lineTo(385.5, 227.8);
      ctx.closePath();
      ctx.fill();

      // hair/5/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(220.2, 134.5);
      ctx.bezierCurveTo(220.2, 134.5, 131.0, 113.3, 87.4, 214.1);
      ctx.bezierCurveTo(87.4, 214.1, 93.5, 83.8, 235.2, 118.2);
      ctx.lineTo(220.2, 134.5);
      ctx.closePath();
      ctx.fill();

      // hair/5/stroke/Tracciato composto
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();

      // hair/5/stroke/Tracciato composto/Tracciato
      ctx.moveTo(457.7, 280.9);
      ctx.bezierCurveTo(456.1, 203.1, 434.1, 149.0, 392.5, 120.2);
      ctx.bezierCurveTo(353.2, 93.0, 306.7, 95.5, 279.0, 100.5);
      ctx.lineTo(279.0, 100.5);
      ctx.bezierCurveTo(279.0, 100.5, 273.7, 101.1, 265.6, 103.4);
      ctx.bezierCurveTo(263.1, 104.0, 260.9, 104.6, 259.2, 105.1);
      ctx.bezierCurveTo(242.9, 98.7, 182.5, 78.7, 130.6, 109.5);
      ctx.bezierCurveTo(87.4, 135.1, 62.4, 188.2, 56.4, 267.4);
      ctx.bezierCurveTo(55.4, 273.4, 48.6, 322.3, 60.6, 392.5);
      ctx.bezierCurveTo(61.4, 397.2, 65.1, 400.9, 69.8, 401.7);
      ctx.lineTo(160.8, 417.0);
      ctx.bezierCurveTo(161.5, 417.1, 162.1, 417.2, 162.8, 417.2);
      ctx.bezierCurveTo(167.0, 417.2, 171.0, 414.9, 172.9, 411.0);
      ctx.bezierCurveTo(175.1, 406.6, 174.3, 401.3, 170.8, 397.9);
      ctx.bezierCurveTo(170.0, 397.0, 161.1, 386.7, 153.9, 361.4);
      ctx.bezierCurveTo(143.9, 326.1, 143.4, 283.8, 145.8, 248.6);
      ctx.bezierCurveTo(146.6, 248.9, 147.5, 249.3, 148.4, 249.6);
      ctx.bezierCurveTo(151.3, 250.9, 154.4, 252.1, 157.7, 253.0);
      ctx.lineTo(157.7, 253.0);
      ctx.bezierCurveTo(168.7, 256.8, 182.0, 260.5, 197.3, 263.3);
      ctx.bezierCurveTo(212.2, 266.0, 230.1, 268.0, 250.4, 268.0);
      ctx.bezierCurveTo(282.9, 268.0, 321.7, 262.9, 364.7, 247.5);
      ctx.bezierCurveTo(368.6, 269.9, 368.7, 298.0, 365.0, 330.7);
      ctx.bezierCurveTo(360.5, 370.3, 351.8, 402.6, 351.7, 402.9);
      ctx.bezierCurveTo(350.6, 406.8, 351.8, 411.0, 354.7, 413.9);
      ctx.bezierCurveTo(357.5, 416.7, 361.7, 417.8, 365.7, 416.7);
      ctx.lineTo(429.4, 398.9);
      ctx.bezierCurveTo(432.2, 398.1, 434.5, 396.3, 436.0, 393.9);
      ctx.bezierCurveTo(461.6, 351.7, 458.1, 286.5, 457.7, 280.9);
      ctx.closePath();

      // hair/5/stroke/Tracciato composto/Tracciato
      ctx.moveTo(434.4, 318.5);
      ctx.bezierCurveTo(432.2, 342.9, 426.8, 363.5, 418.8, 378.4);
      ctx.lineTo(378.1, 389.8);
      ctx.bezierCurveTo(385.1, 357.7, 396.5, 291.5, 386.1, 239.1);
      ctx.bezierCurveTo(386.3, 239.0, 386.5, 237.8, 386.5, 235.9);
      ctx.bezierCurveTo(387.0, 235.5, 387.5, 235.1, 388.0, 234.6);
      ctx.bezierCurveTo(393.7, 240.7, 406.9, 259.6, 411.5, 306.0);
      ctx.bezierCurveTo(411.5, 306.0, 418.2, 255.6, 396.8, 224.8);
      ctx.bezierCurveTo(407.5, 209.4, 407.7, 193.2, 407.7, 193.2);
      ctx.bezierCurveTo(395.2, 209.8, 374.6, 219.2, 374.6, 219.2);
      ctx.lineTo(374.4, 219.5);
      ctx.bezierCurveTo(301.9, 249.7, 241.1, 248.1, 202.5, 241.2);
      ctx.bezierCurveTo(177.1, 236.7, 157.7, 229.4, 146.1, 224.1);
      ctx.bezierCurveTo(144.5, 223.4, 125.1, 214.1, 113.1, 198.2);
      ctx.bezierCurveTo(113.1, 198.2, 113.2, 211.8, 121.5, 225.9);
      ctx.bezierCurveTo(114.1, 233.3, 94.0, 258.2, 94.4, 312.0);
      ctx.bezierCurveTo(94.4, 312.0, 101.1, 265.2, 123.7, 240.6);
      ctx.bezierCurveTo(119.6, 292.3, 122.7, 335.9, 133.0, 370.4);
      ctx.bezierCurveTo(135.4, 378.4, 137.9, 385.1, 140.4, 390.6);
      ctx.lineTo(81.6, 380.8);
      ctx.bezierCurveTo(73.6, 328.9, 76.2, 286.4, 78.7, 270.6);
      ctx.bezierCurveTo(78.8, 270.3, 78.8, 270.0, 78.9, 269.6);
      ctx.bezierCurveTo(84.3, 198.0, 105.5, 150.7, 142.0, 129.1);
      ctx.bezierCurveTo(172.3, 111.0, 207.7, 114.5, 230.5, 119.9);
      ctx.bezierCurveTo(219.8, 127.5, 209.4, 137.9, 201.8, 152.2);
      ctx.bezierCurveTo(201.8, 152.2, 257.8, 121.6, 310.5, 120.0);
      ctx.lineTo(310.5, 120.0);
      ctx.bezierCurveTo(332.1, 119.6, 357.5, 123.5, 379.6, 138.8);
      ctx.bezierCurveTo(415.0, 163.3, 433.7, 211.3, 435.1, 281.6);
      ctx.bezierCurveTo(435.1, 281.8, 435.1, 282.0, 435.1, 282.2);
      ctx.bezierCurveTo(435.1, 282.3, 436.2, 298.0, 434.4, 318.5);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();

      // hair/5/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(377.5, 170.5);
      ctx.bezierCurveTo(327.2, 212.2, 246.2, 227.8, 246.2, 227.8);
      ctx.bezierCurveTo(361.9, 223.8, 377.5, 170.5, 377.5, 170.5);
      ctx.closePath();
      ctx.fill();

      // hair/5/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(315.2, 156.5);
      ctx.bezierCurveTo(315.2, 156.5, 287.9, 194.2, 239.5, 210.5);
      ctx.bezierCurveTo(239.5, 210.5, 297.5, 211.5, 315.2, 156.5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
