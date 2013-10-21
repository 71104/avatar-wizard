    function draw(ctx, color) {

      var alpha = ctx.globalAlpha;

      // outfits/2
      ctx.save();

      // outfits/2/base
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(323.5, 414.0);
      ctx.lineTo(323.5, 485.3);
      ctx.bezierCurveTo(323.5, 504.1, 308.1, 519.4, 289.3, 519.4);
      ctx.lineTo(222.3, 519.4);
      ctx.bezierCurveTo(203.5, 519.4, 188.2, 504.1, 188.2, 485.3);
      ctx.lineTo(188.2, 414.0);
      ctx.lineTo(323.5, 414.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // outfits/2/fill

      // outfits/2/fill/Tracciato
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(243.0, 436.9);
      ctx.lineTo(229.5, 480.4);
      ctx.lineTo(257.5, 505.1);
      ctx.lineTo(284.8, 481.1);
      ctx.lineTo(269.8, 439.6);
      ctx.fillStyle = color || "rgb(97, 178, 47)";
      ctx.fill();

      // outfits/2/fill/Tracciato
      ctx.beginPath();
      ctx.moveTo(276.3, 412.2);
      ctx.bezierCurveTo(281.0, 416.9, 281.0, 424.5, 276.3, 429.1);
      ctx.lineTo(264.3, 441.2);
      ctx.bezierCurveTo(259.6, 445.9, 252.0, 445.9, 247.3, 441.2);
      ctx.lineTo(235.3, 429.1);
      ctx.bezierCurveTo(230.6, 424.5, 230.6, 416.9, 235.3, 412.2);
      ctx.lineTo(276.3, 412.2);
      ctx.closePath();
      ctx.fill();

      // outfits/2/stroke
      ctx.restore();

      // outfits/2/stroke/Tracciato
      ctx.save();
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(216.1, 485.8);
      ctx.bezierCurveTo(216.1, 484.4, 216.1, 431.0, 216.1, 414.0);
      ctx.lineTo(204.6, 414.0);
      ctx.lineTo(188.2, 414.0);
      ctx.lineTo(188.2, 485.3);
      ctx.bezierCurveTo(188.2, 504.1, 203.5, 519.4, 222.3, 519.4);
      ctx.lineTo(248.6, 519.4);
      ctx.bezierCurveTo(219.6, 519.4, 216.1, 487.3, 216.1, 485.8);
      ctx.closePath();
      ctx.fillStyle = "rgb(1, 1, 2)";
      ctx.fill();

      // outfits/2/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(245.3, 446.2);
      ctx.bezierCurveTo(245.3, 446.2, 255.8, 454.1, 266.7, 445.8);
      ctx.lineTo(267.5, 447.7);
      ctx.bezierCurveTo(267.5, 447.7, 260.1, 456.7, 247.0, 452.2);
      ctx.lineTo(240.3, 483.3);
      ctx.lineTo(235.2, 478.8);
      ctx.lineTo(245.3, 446.2);
      ctx.closePath();
      ctx.fill();

      // outfits/2/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(240.4, 427.2);
      ctx.lineTo(238.5, 425.2);
      ctx.bezierCurveTo(238.5, 425.2, 234.8, 421.5, 237.7, 417.2);
      ctx.lineTo(273.9, 417.2);
      ctx.bezierCurveTo(273.9, 417.2, 275.2, 419.6, 274.8, 421.2);
      ctx.lineTo(239.9, 421.2);
      ctx.bezierCurveTo(239.9, 421.2, 239.3, 424.5, 240.4, 427.2);
      ctx.closePath();
      ctx.fill();

      // outfits/2/stroke/stroke
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();

      // outfits/2/stroke/stroke/Tracciato
      ctx.moveTo(166.2, 392.0);
      ctx.lineTo(166.2, 485.3);
      ctx.bezierCurveTo(166.2, 516.2, 191.4, 541.4, 222.3, 541.4);
      ctx.lineTo(289.3, 541.4);
      ctx.bezierCurveTo(320.3, 541.4, 345.5, 516.2, 345.5, 485.3);
      ctx.lineTo(345.5, 392.0);
      ctx.lineTo(166.2, 392.0);
      ctx.closePath();

      // outfits/2/stroke/stroke/Tracciato
      ctx.moveTo(323.5, 435.6);
      ctx.bezierCurveTo(323.2, 435.6, 323.0, 435.6, 322.8, 435.6);
      ctx.lineTo(297.1, 439.1);
      ctx.lineTo(291.1, 414.0);
      ctx.lineTo(323.5, 414.0);
      ctx.lineTo(323.5, 435.6);
      ctx.closePath();

      // outfits/2/stroke/stroke/Tracciato
      ctx.moveTo(245.4, 446.1);
      ctx.bezierCurveTo(248.4, 448.4, 252.0, 449.7, 255.8, 449.7);
      ctx.bezierCurveTo(259.9, 449.7, 263.7, 448.3, 266.7, 445.7);
      ctx.lineTo(279.0, 479.6);
      ctx.lineTo(257.5, 498.4);
      ctx.lineTo(235.2, 478.8);
      ctx.lineTo(245.4, 446.1);
      ctx.closePath();

      // outfits/2/stroke/stroke/Tracciato
      ctx.moveTo(272.8, 425.6);
      ctx.lineTo(260.8, 437.6);
      ctx.bezierCurveTo(259.4, 439.0, 257.7, 439.7, 255.8, 439.7);
      ctx.bezierCurveTo(253.9, 439.7, 252.2, 439.0, 250.9, 437.6);
      ctx.lineTo(238.8, 425.6);
      ctx.bezierCurveTo(236.6, 423.3, 236.2, 419.8, 237.7, 417.2);
      ctx.lineTo(273.9, 417.2);
      ctx.bezierCurveTo(275.4, 419.8, 275.1, 423.3, 272.8, 425.6);
      ctx.closePath();

      // outfits/2/stroke/stroke/Tracciato
      ctx.moveTo(220.5, 414.0);
      ctx.lineTo(214.5, 439.1);
      ctx.lineTo(188.8, 435.6);
      ctx.bezierCurveTo(188.6, 435.6, 188.4, 435.6, 188.2, 435.6);
      ctx.lineTo(188.2, 414.0);
      ctx.lineTo(220.5, 414.0);
      ctx.closePath();

      // outfits/2/stroke/stroke/Tracciato
      ctx.moveTo(289.3, 519.4);
      ctx.lineTo(222.3, 519.4);
      ctx.bezierCurveTo(203.5, 519.4, 188.2, 504.1, 188.2, 485.3);
      ctx.lineTo(188.2, 445.6);
      ctx.lineTo(217.6, 449.6);
      ctx.bezierCurveTo(217.9, 449.7, 218.1, 449.7, 218.3, 449.7);
      ctx.bezierCurveTo(220.6, 449.7, 222.6, 448.1, 223.2, 445.8);
      ctx.lineTo(227.8, 426.4);
      ctx.bezierCurveTo(228.6, 428.7, 229.9, 430.9, 231.8, 432.7);
      ctx.lineTo(237.4, 438.3);
      ctx.lineTo(224.7, 478.9);
      ctx.bezierCurveTo(224.1, 480.8, 224.7, 482.9, 226.2, 484.2);
      ctx.lineTo(254.2, 508.8);
      ctx.bezierCurveTo(255.1, 509.7, 256.3, 510.1, 257.5, 510.1);
      ctx.bezierCurveTo(258.7, 510.1, 259.8, 509.7, 260.8, 508.8);
      ctx.lineTo(288.1, 484.8);
      ctx.bezierCurveTo(289.7, 483.5, 290.2, 481.3, 289.5, 479.4);
      ctx.lineTo(274.6, 438.0);
      ctx.lineTo(279.9, 432.7);
      ctx.bezierCurveTo(281.7, 430.9, 283.0, 428.7, 283.8, 426.4);
      ctx.lineTo(288.5, 445.8);
      ctx.bezierCurveTo(289.0, 448.1, 291.0, 449.7, 293.3, 449.7);
      ctx.bezierCurveTo(293.5, 449.7, 293.8, 449.7, 294.0, 449.6);
      ctx.lineTo(323.5, 445.6);
      ctx.lineTo(323.5, 485.3);
      ctx.bezierCurveTo(323.5, 504.1, 308.1, 519.4, 289.3, 519.4);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
