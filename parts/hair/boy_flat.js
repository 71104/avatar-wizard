    function draw(ctx, color) {

      var alpha = ctx.globalAlpha;

      // hair/boy flat
      ctx.save();

      // hair/boy flat/Gruppo
      ctx.save();

      // hair/boy flat/Gruppo/Tracciato
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(197.4, 314.3);
      ctx.bezierCurveTo(197.4, 314.3, 262.4, 402.3, 371.9, 323.3);
      ctx.bezierCurveTo(371.9, 323.3, 391.8, 353.6, 437.3, 342.6);
      ctx.bezierCurveTo(437.3, 342.6, 461.0, 236.5, 323.5, 234.5);
      ctx.bezierCurveTo(189.0, 232.5, 197.4, 314.3, 197.4, 314.3);
      ctx.closePath();
      ctx.fillStyle = color || "rgb(76, 76, 76)";
      ctx.fill();

      // hair/boy flat/Gruppo/Tracciato
      ctx.globalAlpha = alpha * 0.30;
      ctx.beginPath();
      ctx.moveTo(303.2, 245.2);
      ctx.bezierCurveTo(303.2, 245.2, 213.8, 304.8, 247.5, 347.2);
      ctx.bezierCurveTo(247.5, 347.2, 193.5, 314.0, 197.8, 303.6);
      ctx.bezierCurveTo(202.2, 293.2, 236.8, 226.5, 303.2, 245.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(0, 0, 0)";
      ctx.fill();

      // hair/boy flat/Gruppo/Tracciato composto
      ctx.globalAlpha = alpha * 1.00;
      ctx.beginPath();

      // hair/boy flat/Gruppo/Tracciato composto/Tracciato
      ctx.moveTo(283.5, 367.2);
      ctx.bezierCurveTo(223.5, 367.2, 189.9, 322.7, 188.5, 320.8);
      ctx.bezierCurveTo(187.3, 319.2, 186.6, 317.4, 186.4, 315.4);
      ctx.bezierCurveTo(186.3, 314.2, 183.7, 285.8, 206.4, 260.7);
      ctx.bezierCurveTo(228.7, 236.0, 266.5, 223.5, 318.8, 223.5);
      ctx.bezierCurveTo(320.4, 223.5, 322.0, 223.5, 323.7, 223.5);
      ctx.bezierCurveTo(373.3, 224.2, 409.1, 238.1, 430.1, 264.7);
      ctx.bezierCurveTo(457.8, 299.7, 448.5, 343.2, 448.1, 345.0);
      ctx.bezierCurveTo(447.1, 349.1, 444.0, 352.3, 439.9, 353.3);
      ctx.bezierCurveTo(432.5, 355.1, 425.1, 356.0, 418.1, 356.0);
      ctx.bezierCurveTo(394.3, 356.0, 378.6, 345.6, 370.2, 337.8);
      ctx.bezierCurveTo(340.7, 357.3, 311.6, 367.2, 283.5, 367.2);
      ctx.closePath();

      // hair/boy flat/Gruppo/Tracciato composto/Tracciato
      ctx.moveTo(208.3, 310.2);
      ctx.bezierCurveTo(215.6, 318.5, 242.3, 345.2, 283.5, 345.2);
      ctx.bezierCurveTo(309.5, 345.2, 337.1, 334.8, 365.4, 314.4);
      ctx.bezierCurveTo(367.9, 312.6, 370.9, 311.8, 373.9, 312.4);
      ctx.bezierCurveTo(376.9, 313.0, 379.4, 314.6, 381.0, 317.2);
      ctx.bezierCurveTo(381.9, 318.4, 393.3, 334.0, 418.1, 334.0);
      ctx.bezierCurveTo(421.2, 334.0, 424.3, 333.8, 427.5, 333.3);
      ctx.bezierCurveTo(428.5, 321.7, 428.3, 297.7, 412.7, 278.1);
      ctx.bezierCurveTo(396.0, 257.1, 365.9, 246.1, 323.3, 245.5);
      ctx.bezierCurveTo(321.8, 245.5, 320.3, 245.5, 318.8, 245.5);
      ctx.bezierCurveTo(273.9, 245.5, 240.8, 255.7, 223.0, 275.0);
      ctx.bezierCurveTo(210.3, 288.9, 208.4, 303.9, 208.3, 310.2);
      ctx.closePath();
      ctx.fillStyle = "rgb(34, 30, 31)";
      ctx.fill();

      // hair/boy flat/Gruppo/Tracciato
      ctx.globalAlpha = alpha * 0.20;
      ctx.beginPath();
      ctx.moveTo(366.0, 260.0);
      ctx.bezierCurveTo(366.0, 260.0, 410.6, 270.5, 419.3, 320.0);
      ctx.bezierCurveTo(419.3, 320.0, 399.5, 279.5, 366.0, 260.0);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fill();
      ctx.restore();
      ctx.restore();
      ctx.restore();
    }
