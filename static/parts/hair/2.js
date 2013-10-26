    function draw(ctx, color) {

      var alpha = ctx.globalAlpha;

      // hair/2
      ctx.save();

      // hair/2/fill
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(376.1, 286.9);
      ctx.bezierCurveTo(370.0, 262.1, 347.6, 258.2, 347.6, 258.2);
      ctx.bezierCurveTo(247.9, 307.0, 200.8, 233.4, 200.8, 233.4);
      ctx.bezierCurveTo(147.3, 241.9, 135.6, 283.0, 135.6, 283.0);
      ctx.bezierCurveTo(135.6, 283.0, 78.8, 218.2, 135.6, 142.6);
      ctx.bezierCurveTo(135.6, 142.6, 156.3, 150.3, 164.0, 172.6);
      ctx.bezierCurveTo(164.0, 172.6, 194.3, 102.8, 281.1, 94.2);
      ctx.bezierCurveTo(281.1, 94.2, 302.1, 120.3, 286.5, 153.0);
      ctx.bezierCurveTo(286.5, 153.0, 311.7, 127.4, 392.4, 142.6);
      ctx.bezierCurveTo(392.4, 142.6, 393.7, 173.6, 376.1, 190.5);
      ctx.bezierCurveTo(376.1, 190.5, 400.9, 243.5, 376.1, 286.9);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(168, 146, 123)";
      ctx.fill();

      // hair/2/stroke

      // hair/2/stroke/shadow
      ctx.save();
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(162.3, 210.9);
      ctx.bezierCurveTo(162.3, 210.9, 210.3, 113.9, 280.3, 103.2);
      ctx.lineTo(276.3, 100.2);
      ctx.bezierCurveTo(276.3, 100.2, 188.9, 104.2, 164.9, 177.2);
      ctx.lineTo(162.3, 210.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(1, 1, 2)";
      ctx.fill();

      // hair/2/stroke/shadow
      ctx.beginPath();
      ctx.moveTo(147.3, 250.5);
      ctx.bezierCurveTo(147.3, 250.5, 114.2, 190.9, 148.4, 161.9);
      ctx.bezierCurveTo(148.4, 161.9, 145.7, 157.2, 138.1, 152.8);
      ctx.bezierCurveTo(138.1, 152.8, 94.5, 205.4, 134.2, 267.1);
      ctx.lineTo(147.3, 250.5);
      ctx.closePath();
      ctx.fill();

      // hair/2/stroke/shadow
      ctx.beginPath();
      ctx.moveTo(196.9, 199.0);
      ctx.bezierCurveTo(196.9, 199.0, 230.3, 254.3, 286.0, 252.0);
      ctx.lineTo(306.8, 267.1);
      ctx.bezierCurveTo(306.8, 267.1, 195.6, 284.3, 196.9, 199.0);
      ctx.closePath();
      ctx.fill();

      // hair/2/stroke/stroke
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();

      // hair/2/stroke/stroke/Tracciato
      ctx.moveTo(390.9, 184.2);
      ctx.bezierCurveTo(392.2, 181.9, 393.4, 179.3, 394.5, 176.5);
      ctx.bezierCurveTo(394.5, 176.4, 394.6, 176.3, 394.6, 176.2);
      ctx.bezierCurveTo(394.6, 176.2, 394.6, 176.2, 394.6, 176.2);
      ctx.bezierCurveTo(401.0, 159.8, 400.4, 143.3, 400.4, 142.3);
      ctx.bezierCurveTo(400.2, 138.6, 397.5, 135.4, 393.9, 134.7);
      ctx.bezierCurveTo(376.4, 131.4, 360.1, 129.8, 345.3, 129.8);
      ctx.bezierCurveTo(324.7, 129.8, 309.9, 133.0, 299.7, 136.7);
      ctx.bezierCurveTo(303.4, 109.7, 288.1, 90.2, 287.3, 89.2);
      ctx.bezierCurveTo(285.6, 87.1, 283.0, 85.9, 280.3, 86.2);
      ctx.bezierCurveTo(233.1, 90.9, 202.1, 113.1, 184.3, 131.0);
      ctx.bezierCurveTo(175.3, 140.1, 168.8, 148.9, 164.3, 155.8);
      ctx.bezierCurveTo(163.8, 155.1, 163.3, 154.4, 162.8, 153.8);
      ctx.bezierCurveTo(162.4, 153.3, 162.2, 153.1, 162.2, 153.1);
      ctx.lineTo(162.2, 153.1);
      ctx.bezierCurveTo(152.0, 140.3, 139.1, 135.4, 138.4, 135.1);
      ctx.bezierCurveTo(135.1, 133.9, 131.3, 135.0, 129.2, 137.8);
      ctx.bezierCurveTo(97.9, 179.4, 99.7, 218.2, 106.6, 243.3);
      ctx.bezierCurveTo(114.1, 270.4, 129.0, 287.6, 129.6, 288.3);
      ctx.bezierCurveTo(131.5, 290.5, 134.5, 291.4, 137.4, 290.8);
      ctx.bezierCurveTo(140.2, 290.2, 142.5, 288.0, 143.3, 285.2);
      ctx.bezierCurveTo(143.4, 284.8, 153.4, 251.3, 197.3, 242.2);
      ctx.bezierCurveTo(197.8, 242.8, 198.3, 243.4, 198.9, 244.1);
      ctx.bezierCurveTo(200.6, 246.8, 202.8, 249.3, 205.6, 251.4);
      ctx.lineTo(205.6, 251.4);
      ctx.bezierCurveTo(219.1, 264.7, 244.5, 282.9, 282.8, 282.9);
      ctx.bezierCurveTo(296.3, 282.9, 310.4, 280.6, 324.9, 276.0);
      ctx.lineTo(324.9, 276.0);
      ctx.bezierCurveTo(324.9, 276.0, 332.5, 274.2, 341.3, 269.9);
      ctx.bezierCurveTo(343.6, 268.9, 346.0, 267.8, 348.4, 266.7);
      ctx.bezierCurveTo(353.2, 268.3, 364.6, 273.5, 368.4, 288.8);
      ctx.bezierCurveTo(369.2, 292.0, 371.8, 294.3, 375.0, 294.8);
      ctx.bezierCurveTo(375.4, 294.8, 375.8, 294.9, 376.1, 294.9);
      ctx.bezierCurveTo(379.0, 294.9, 381.6, 293.3, 383.1, 290.8);
      ctx.bezierCurveTo(405.3, 251.9, 391.3, 207.1, 385.5, 192.2);
      ctx.bezierCurveTo(387.5, 189.6, 389.3, 187.0, 390.9, 184.2);
      ctx.closePath();

      // hair/2/stroke/stroke/Tracciato
      ctx.moveTo(377.7, 174.9);
      ctx.bezierCurveTo(371.9, 185.2, 354.9, 203.2, 308.7, 199.9);
      ctx.bezierCurveTo(308.7, 199.9, 345.2, 213.9, 371.9, 201.6);
      ctx.bezierCurveTo(376.3, 214.4, 383.4, 241.4, 375.7, 267.4);
      ctx.bezierCurveTo(371.2, 261.3, 365.7, 257.4, 360.9, 254.8);
      ctx.bezierCurveTo(365.0, 249.6, 367.6, 243.2, 367.5, 235.6);
      ctx.bezierCurveTo(367.5, 235.6, 356.2, 244.3, 343.0, 251.4);
      ctx.bezierCurveTo(342.9, 251.4, 291.4, 268.5, 262.7, 225.5);
      ctx.bezierCurveTo(262.7, 225.5, 270.1, 255.1, 301.1, 265.3);
      ctx.bezierCurveTo(294.9, 266.4, 288.8, 266.9, 282.8, 266.9);
      ctx.bezierCurveTo(282.8, 266.9, 282.8, 266.9, 282.8, 266.9);
      ctx.bezierCurveTo(251.5, 266.9, 230.4, 252.8, 218.6, 241.8);
      ctx.bezierCurveTo(215.5, 238.8, 196.1, 219.5, 197.0, 197.2);
      ctx.bezierCurveTo(197.0, 197.2, 193.2, 208.0, 193.0, 220.7);
      ctx.bezierCurveTo(189.0, 218.6, 182.2, 216.3, 173.7, 218.6);
      ctx.bezierCurveTo(173.7, 218.6, 181.6, 221.1, 186.8, 228.3);
      ctx.bezierCurveTo(157.2, 236.5, 141.7, 254.5, 134.2, 267.1);
      ctx.bezierCurveTo(130.1, 260.4, 125.3, 250.8, 122.0, 239.0);
      ctx.bezierCurveTo(113.9, 209.4, 119.3, 180.5, 138.1, 152.8);
      ctx.bezierCurveTo(139.3, 153.5, 140.5, 154.4, 141.8, 155.4);
      ctx.bezierCurveTo(163.6, 171.9, 162.2, 212.2, 162.2, 212.2);
      ctx.bezierCurveTo(170.2, 198.2, 171.9, 186.1, 171.0, 176.5);
      ctx.bezierCurveTo(171.1, 176.3, 171.3, 176.1, 171.4, 175.8);
      ctx.bezierCurveTo(171.6, 175.2, 199.6, 112.7, 277.2, 102.7);
      ctx.bezierCurveTo(279.9, 107.3, 284.1, 116.2, 284.2, 127.5);
      ctx.bezierCurveTo(281.2, 165.9, 245.7, 197.2, 245.7, 197.2);
      ctx.bezierCurveTo(270.5, 190.9, 284.3, 173.6, 291.7, 159.1);
      ctx.bezierCurveTo(291.9, 159.0, 292.0, 158.8, 292.1, 158.7);
      ctx.bezierCurveTo(293.1, 157.9, 307.4, 145.8, 345.3, 145.8);
      ctx.bezierCurveTo(357.2, 145.8, 370.3, 146.9, 384.2, 149.3);
      ctx.bezierCurveTo(383.8, 155.7, 382.3, 166.0, 377.7, 174.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
