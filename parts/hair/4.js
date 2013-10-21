    function draw(ctx, color) {

      // hair/4
      ctx.save();

      // hair/4/fill
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(289.8, 214.3);
      ctx.bezierCurveTo(289.8, 231.4, 276.0, 245.3, 258.8, 245.3);
      ctx.lineTo(258.8, 245.3);
      ctx.bezierCurveTo(241.7, 245.3, 227.8, 231.4, 227.8, 214.3);
      ctx.lineTo(217.8, 117.0);
      ctx.bezierCurveTo(217.8, 99.9, 241.7, 88.6, 258.8, 88.6);
      ctx.lineTo(258.8, 88.6);
      ctx.bezierCurveTo(276.0, 88.6, 301.2, 99.9, 301.2, 117.0);
      ctx.lineTo(289.8, 214.3);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(91, 176, 57)";
      ctx.fill();

      // hair/4/stroke

      // hair/4/stroke/Tracciato composto
      ctx.save();
      ctx.beginPath();

      // hair/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(258.8, 253.3);
      ctx.bezierCurveTo(237.5, 253.3, 220.1, 236.1, 219.8, 214.7);
      ctx.lineTo(209.8, 117.4);
      ctx.lineTo(209.8, 117.0);
      ctx.bezierCurveTo(209.8, 94.5, 238.4, 80.6, 258.8, 80.6);
      ctx.bezierCurveTo(279.9, 80.6, 309.2, 94.5, 309.2, 117.0);
      ctx.lineTo(309.2, 117.5);
      ctx.lineTo(297.8, 214.8);
      ctx.bezierCurveTo(297.6, 236.1, 280.2, 253.3, 258.8, 253.3);
      ctx.closePath();

      // hair/4/stroke/Tracciato composto/Tracciato
      ctx.moveTo(225.8, 116.7);
      ctx.lineTo(235.8, 213.9);
      ctx.lineTo(235.8, 214.3);
      ctx.bezierCurveTo(235.8, 227.0, 246.2, 237.3, 258.8, 237.3);
      ctx.bezierCurveTo(271.5, 237.3, 281.8, 227.0, 281.8, 214.3);
      ctx.lineTo(281.8, 213.9);
      ctx.lineTo(293.2, 116.6);
      ctx.bezierCurveTo(292.7, 106.3, 273.6, 96.6, 258.8, 96.6);
      ctx.bezierCurveTo(244.4, 96.6, 226.2, 106.0, 225.8, 116.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();

      // hair/4/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(225.1, 101.6);
      ctx.bezierCurveTo(225.2, 106.5, 222.9, 113.6, 223.1, 118.5);
      ctx.bezierCurveTo(238.4, 131.8, 242.8, 172.2, 242.8, 172.2);
      ctx.bezierCurveTo(248.5, 128.4, 244.2, 116.6, 225.1, 101.6);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
