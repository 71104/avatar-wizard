    function draw(ctx, color) {

      var alpha = ctx.globalAlpha;

      // outfits/4
      ctx.save();

      // outfits/4/fill
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(323.5, 414.8);
      ctx.lineTo(323.5, 486.1);
      ctx.bezierCurveTo(323.5, 504.9, 308.1, 520.3, 289.3, 520.3);
      ctx.lineTo(222.3, 520.3);
      ctx.bezierCurveTo(203.5, 520.3, 188.2, 504.9, 188.2, 486.1);
      ctx.lineTo(188.2, 414.8);
      ctx.lineTo(323.5, 414.8);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(105, 180, 45)";
      ctx.fill();

      // outfits/4/stroke

      // outfits/4/stroke/Tracciato composto
      ctx.save();
      ctx.beginPath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(231.7, 455.9);
      ctx.lineTo(231.7, 488.5);
      ctx.lineTo(244.4, 491.9);
      ctx.lineTo(243.9, 501.4);
      ctx.lineTo(259.3, 504.3);
      ctx.lineTo(259.7, 493.1);
      ctx.lineTo(274.4, 490.7);
      ctx.lineTo(279.2, 454.4);
      ctx.lineTo(231.7, 455.9);
      ctx.closePath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(241.4, 488.1);
      ctx.bezierCurveTo(238.2, 488.1, 235.6, 485.5, 235.6, 482.3);
      ctx.bezierCurveTo(235.6, 480.7, 236.2, 479.2, 237.3, 478.2);
      ctx.bezierCurveTo(240.0, 480.1, 243.9, 482.9, 246.6, 484.8);
      ctx.bezierCurveTo(245.6, 486.8, 243.7, 488.1, 241.4, 488.1);
      ctx.closePath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(249.2, 494.0);
      ctx.lineTo(251.9, 487.9);
      ctx.lineTo(255.4, 494.7);
      ctx.lineTo(249.2, 494.0);
      ctx.closePath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(265.7, 488.1);
      ctx.bezierCurveTo(263.5, 488.1, 261.5, 486.8, 260.5, 484.8);
      ctx.bezierCurveTo(263.2, 482.9, 267.1, 480.1, 269.8, 478.2);
      ctx.bezierCurveTo(270.9, 479.2, 271.5, 480.7, 271.5, 482.3);
      ctx.bezierCurveTo(271.5, 485.5, 268.9, 488.1, 265.7, 488.1);
      ctx.closePath();
      ctx.fillStyle = "rgb(229, 215, 189)";
      ctx.fill();

      // outfits/4/stroke/effect
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(216.1, 486.6);
      ctx.bezierCurveTo(216.1, 485.3, 216.1, 431.8, 216.1, 414.8);
      ctx.lineTo(204.6, 414.8);
      ctx.lineTo(188.2, 414.8);
      ctx.lineTo(188.2, 486.1);
      ctx.bezierCurveTo(188.2, 504.9, 203.5, 520.3, 222.3, 520.3);
      ctx.lineTo(248.6, 520.3);
      ctx.bezierCurveTo(219.6, 520.3, 216.1, 488.1, 216.1, 486.6);
      ctx.closePath();
      ctx.fillStyle = "rgb(1, 1, 2)";
      ctx.fill();

      // outfits/4/stroke/Tracciato
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();
      ctx.moveTo(209.5, 409.5);
      ctx.bezierCurveTo(209.5, 409.5, 255.0, 460.5, 301.9, 411.3);
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();

      // outfits/4/stroke/Tracciato composto
      ctx.beginPath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(262.0, 442.2);
      ctx.bezierCurveTo(260.9, 442.2, 260.0, 441.4, 260.0, 440.3);
      ctx.bezierCurveTo(259.9, 439.2, 260.8, 438.3, 261.9, 438.2);
      ctx.bezierCurveTo(263.8, 438.1, 265.7, 437.9, 267.6, 437.6);
      ctx.bezierCurveTo(268.7, 437.4, 269.7, 438.1, 269.9, 439.2);
      ctx.bezierCurveTo(270.1, 440.3, 269.3, 441.3, 268.2, 441.5);
      ctx.bezierCurveTo(266.2, 441.9, 264.1, 442.1, 262.0, 442.2);
      ctx.bezierCurveTo(262.0, 442.2, 262.0, 442.2, 262.0, 442.2);
      ctx.closePath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(256.0, 442.1);
      ctx.bezierCurveTo(255.9, 442.1, 255.9, 442.1, 255.8, 442.1);
      ctx.bezierCurveTo(253.8, 442.0, 251.7, 441.8, 249.7, 441.5);
      ctx.bezierCurveTo(248.6, 441.4, 247.9, 440.3, 248.0, 439.2);
      ctx.bezierCurveTo(248.2, 438.1, 249.2, 437.4, 250.3, 437.6);
      ctx.bezierCurveTo(252.2, 437.8, 254.1, 438.0, 256.1, 438.1);
      ctx.bezierCurveTo(257.2, 438.2, 258.0, 439.2, 258.0, 440.3);
      ctx.bezierCurveTo(257.9, 441.3, 257.0, 442.1, 256.0, 442.1);
      ctx.closePath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(244.1, 440.4);
      ctx.bezierCurveTo(244.0, 440.4, 243.8, 440.4, 243.6, 440.3);
      ctx.bezierCurveTo(241.7, 439.8, 239.7, 439.3, 237.7, 438.6);
      ctx.bezierCurveTo(236.7, 438.2, 236.1, 437.1, 236.5, 436.1);
      ctx.bezierCurveTo(236.8, 435.0, 237.9, 434.5, 239.0, 434.8);
      ctx.bezierCurveTo(240.8, 435.4, 242.7, 436.0, 244.6, 436.4);
      ctx.bezierCurveTo(245.7, 436.7, 246.3, 437.8, 246.1, 438.9);
      ctx.bezierCurveTo(245.8, 439.8, 245.0, 440.4, 244.1, 440.4);
      ctx.closePath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(273.8, 440.2);
      ctx.bezierCurveTo(272.9, 440.2, 272.1, 439.7, 271.8, 438.8);
      ctx.bezierCurveTo(271.5, 437.7, 272.1, 436.6, 273.2, 436.3);
      ctx.bezierCurveTo(275.0, 435.8, 276.9, 435.1, 278.7, 434.4);
      ctx.bezierCurveTo(279.7, 434.0, 280.9, 434.5, 281.3, 435.5);
      ctx.bezierCurveTo(281.7, 436.5, 281.2, 437.7, 280.2, 438.1);
      ctx.bezierCurveTo(278.2, 438.9, 276.3, 439.6, 274.3, 440.1);
      ctx.bezierCurveTo(274.1, 440.2, 273.9, 440.2, 273.8, 440.2);
      ctx.closePath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(232.8, 436.5);
      ctx.bezierCurveTo(232.5, 436.5, 232.2, 436.5, 232.0, 436.4);
      ctx.bezierCurveTo(230.1, 435.5, 228.2, 434.6, 226.4, 433.7);
      ctx.bezierCurveTo(225.4, 433.1, 225.1, 431.9, 225.6, 430.9);
      ctx.bezierCurveTo(226.1, 430.0, 227.3, 429.6, 228.3, 430.1);
      ctx.bezierCurveTo(230.0, 431.1, 231.8, 431.9, 233.6, 432.7);
      ctx.bezierCurveTo(234.6, 433.1, 235.0, 434.3, 234.6, 435.3);
      ctx.bezierCurveTo(234.3, 436.1, 233.5, 436.5, 232.8, 436.5);
      ctx.closePath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(284.9, 435.8);
      ctx.bezierCurveTo(284.2, 435.8, 283.5, 435.4, 283.1, 434.7);
      ctx.bezierCurveTo(282.6, 433.7, 283.0, 432.5, 284.0, 432.0);
      ctx.bezierCurveTo(285.6, 431.1, 287.3, 430.1, 289.0, 429.1);
      ctx.bezierCurveTo(289.9, 428.5, 291.2, 428.8, 291.8, 429.7);
      ctx.bezierCurveTo(292.4, 430.6, 292.1, 431.9, 291.2, 432.5);
      ctx.bezierCurveTo(289.4, 433.6, 287.6, 434.6, 285.8, 435.5);
      ctx.bezierCurveTo(285.5, 435.7, 285.2, 435.8, 284.9, 435.8);
      ctx.closePath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(222.2, 430.8);
      ctx.bezierCurveTo(221.8, 430.8, 221.5, 430.7, 221.1, 430.5);
      ctx.bezierCurveTo(219.4, 429.4, 217.7, 428.2, 216.1, 426.9);
      ctx.bezierCurveTo(215.2, 426.3, 215.0, 425.0, 215.7, 424.1);
      ctx.bezierCurveTo(216.4, 423.3, 217.6, 423.1, 218.5, 423.8);
      ctx.bezierCurveTo(220.1, 425.0, 221.7, 426.1, 223.3, 427.1);
      ctx.bezierCurveTo(224.2, 427.8, 224.5, 429.0, 223.9, 429.9);
      ctx.bezierCurveTo(223.5, 430.5, 222.9, 430.8, 222.2, 430.8);
      ctx.closePath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(295.0, 429.3);
      ctx.bezierCurveTo(294.4, 429.3, 293.8, 429.1, 293.4, 428.5);
      ctx.bezierCurveTo(292.8, 427.7, 292.9, 426.4, 293.8, 425.7);
      ctx.bezierCurveTo(295.4, 424.6, 296.9, 423.3, 298.4, 422.1);
      ctx.bezierCurveTo(299.2, 421.3, 300.5, 421.4, 301.2, 422.2);
      ctx.bezierCurveTo(301.9, 423.1, 301.8, 424.3, 301.0, 425.1);
      ctx.bezierCurveTo(299.5, 426.4, 297.9, 427.7, 296.2, 428.9);
      ctx.bezierCurveTo(295.9, 429.2, 295.4, 429.3, 295.0, 429.3);
      ctx.closePath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(212.7, 423.5);
      ctx.bezierCurveTo(212.2, 423.5, 211.7, 423.3, 211.3, 423.0);
      ctx.bezierCurveTo(208.5, 420.4, 207.0, 418.6, 206.9, 418.5);
      ctx.bezierCurveTo(206.2, 417.7, 206.3, 416.4, 207.2, 415.7);
      ctx.bezierCurveTo(208.0, 415.0, 209.3, 415.1, 210.0, 416.0);
      ctx.bezierCurveTo(210.0, 416.0, 211.4, 417.7, 214.0, 420.0);
      ctx.bezierCurveTo(214.9, 420.8, 214.9, 422.0, 214.2, 422.9);
      ctx.bezierCurveTo(213.8, 423.3, 213.2, 423.5, 212.7, 423.5);
      ctx.closePath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(304.0, 421.4);
      ctx.bezierCurveTo(303.5, 421.4, 303.0, 421.2, 302.6, 420.9);
      ctx.bezierCurveTo(301.8, 420.1, 301.8, 418.8, 302.6, 418.0);
      ctx.bezierCurveTo(303.7, 416.9, 304.3, 416.1, 304.4, 416.0);
      ctx.bezierCurveTo(304.5, 416.0, 304.5, 415.9, 304.6, 415.8);
      ctx.bezierCurveTo(305.4, 415.1, 306.6, 415.1, 307.4, 415.8);
      ctx.bezierCurveTo(308.9, 417.3, 307.8, 418.4, 305.5, 420.8);
      ctx.bezierCurveTo(305.1, 421.2, 304.6, 421.4, 304.0, 421.4);
      ctx.closePath();
      ctx.fill();

      // outfits/4/stroke/Tracciato composto
      ctx.beginPath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(345.5, 392.8);
      ctx.lineTo(345.5, 486.1);
      ctx.bezierCurveTo(345.5, 517.1, 320.3, 542.3, 289.3, 542.3);
      ctx.lineTo(222.3, 542.3);
      ctx.bezierCurveTo(191.4, 542.3, 166.2, 517.1, 166.2, 486.1);
      ctx.lineTo(166.2, 392.8);
      ctx.lineTo(345.5, 392.8);
      ctx.closePath();

      // outfits/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(323.5, 486.1);
      ctx.lineTo(323.5, 414.8);
      ctx.lineTo(188.2, 414.8);
      ctx.lineTo(188.2, 486.1);
      ctx.bezierCurveTo(188.2, 504.9, 203.5, 520.3, 222.3, 520.3);
      ctx.lineTo(289.3, 520.3);
      ctx.bezierCurveTo(308.1, 520.3, 323.5, 504.9, 323.5, 486.1);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
