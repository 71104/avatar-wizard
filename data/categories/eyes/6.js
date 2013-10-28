    function draw(ctx, color) {

      // eyes/6
      ctx.save();

      // eyes/6/base
      ctx.save();

      // eyes/6/base/Tracciato
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(349.8, 315.7);
      ctx.bezierCurveTo(355.9, 325.1, 353.2, 337.6, 343.8, 343.7);
      ctx.bezierCurveTo(334.4, 349.7, 321.8, 347.0, 315.8, 337.6);
      ctx.bezierCurveTo(309.7, 328.2, 312.4, 315.7, 321.8, 309.6);
      ctx.bezierCurveTo(331.2, 303.6, 343.8, 306.3, 349.8, 315.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();

      // eyes/6/base/Tracciato
      ctx.beginPath();
      ctx.moveTo(163.9, 315.3);
      ctx.bezierCurveTo(157.7, 325.0, 160.5, 338.0, 170.2, 344.3);
      ctx.bezierCurveTo(179.9, 350.5, 192.9, 347.7, 199.2, 338.0);
      ctx.bezierCurveTo(205.4, 328.2, 202.6, 315.3, 192.9, 309.0);
      ctx.bezierCurveTo(183.2, 302.8, 170.2, 305.6, 163.9, 315.3);
      ctx.closePath();
      ctx.fill();

      // eyes/6/fill
      ctx.restore();

      // eyes/6/fill/Tracciato
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(341.3, 322.1);
      ctx.bezierCurveTo(337.5, 316.1, 329.5, 314.3, 323.5, 318.2);
      ctx.bezierCurveTo(317.5, 322.0, 315.8, 330.0, 319.6, 336.0);
      ctx.bezierCurveTo(323.5, 342.0, 331.5, 343.8, 337.5, 339.9);
      ctx.bezierCurveTo(343.5, 336.0, 345.2, 328.1, 341.3, 322.1);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(108, 180, 44)";
      ctx.fill();

      // eyes/6/fill/Tracciato
      ctx.beginPath();
      ctx.moveTo(172.0, 322.6);
      ctx.bezierCurveTo(168.1, 328.6, 169.8, 336.6, 175.8, 340.4);
      ctx.bezierCurveTo(181.8, 344.3, 189.8, 342.6, 193.7, 336.6);
      ctx.bezierCurveTo(197.5, 330.6, 195.8, 322.6, 189.8, 318.7);
      ctx.bezierCurveTo(183.8, 314.9, 175.8, 316.6, 172.0, 322.6);
      ctx.closePath();
      ctx.fill();

      // eyes/6/stroke
      ctx.restore();

      // eyes/6/stroke/Tracciato
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(354.1, 306.4);
      ctx.lineTo(306.9, 312.7);
      ctx.lineWidth = 8.0;
      ctx.strokeStyle = "rgb(35, 30, 32)";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();

      // eyes/6/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(181.5, 324.9);
      ctx.bezierCurveTo(178.9, 328.9, 180.1, 334.3, 184.1, 336.9);
      ctx.bezierCurveTo(188.2, 339.6, 193.6, 338.4, 196.2, 334.3);
      ctx.bezierCurveTo(198.8, 330.3, 197.7, 324.8, 193.6, 322.2);
      ctx.bezierCurveTo(189.5, 319.6, 184.1, 320.8, 181.5, 324.9);
      ctx.closePath();
      ctx.fillStyle = "rgb(35, 30, 32)";
      ctx.fill();

      // eyes/6/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(329.1, 324.3);
      ctx.bezierCurveTo(326.5, 328.4, 327.7, 333.8, 331.7, 336.4);
      ctx.bezierCurveTo(335.8, 339.0, 341.2, 337.8, 343.8, 333.8);
      ctx.bezierCurveTo(346.5, 329.7, 345.3, 324.3, 341.2, 321.7);
      ctx.bezierCurveTo(337.1, 319.1, 331.7, 320.2, 329.1, 324.3);
      ctx.closePath();
      ctx.fill();

      // eyes/6/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(323.5, 322.7);
      ctx.bezierCurveTo(322.4, 324.4, 322.9, 326.6, 324.6, 327.7);
      ctx.bezierCurveTo(326.2, 328.8, 328.5, 328.3, 329.5, 326.6);
      ctx.bezierCurveTo(330.6, 325.0, 330.1, 322.7, 328.4, 321.7);
      ctx.bezierCurveTo(326.8, 320.6, 324.6, 321.1, 323.5, 322.7);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();

      // eyes/6/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(179.8, 323.2);
      ctx.bezierCurveTo(178.7, 324.9, 179.2, 327.1, 180.9, 328.2);
      ctx.bezierCurveTo(182.5, 329.3, 184.8, 328.8, 185.8, 327.1);
      ctx.bezierCurveTo(186.9, 325.4, 186.4, 323.2, 184.8, 322.1);
      ctx.bezierCurveTo(183.1, 321.1, 180.9, 321.5, 179.8, 323.2);
      ctx.closePath();
      ctx.fill();

      // eyes/6/stroke/Tracciato
      ctx.beginPath();
      ctx.moveTo(158.0, 306.4);
      ctx.lineTo(205.1, 312.7);
      ctx.stroke();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
