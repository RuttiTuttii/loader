var screen_width = Math.round(Global.GetScreenSize()[0]);

function HSVtoRGB(h, s, v)
{
    var r, g, b, i, f, p, q, t;

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6)
    {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

function onDrawEvent()
{
    var colors = HSVtoRGB(Global.Realtime() * UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Rainbow Line Speed"), 1, 1);


}

Global.RegisterCallback("Draw", "onDrawEvent");
UI.AddSliderFloat("Rainbow Line Speed", 0.01, 1.0);
UI.SetValue("MISC", "JAVASCRIPT", "Script Items", "Rainbow Line Speed", 0.1);

const window_x = UI.AddSliderInt("window_x", 0, Global.GetScreenSize()[0])
const window_y = UI.AddSliderInt("window_y", 0, Global.GetScreenSize()[1])
var lasttime = 0;
function get_velocity(index)
{
    var velocity = Entity.GetProp(index, "CBasePlayer", "m_vecVelocity[0]");
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}
function draw()
{
	var colors = HSVtoRGB(Global.Realtime() * UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Rainbow Line Speed"), 1, 1);
	localplayer_index = Entity.GetLocalPlayer( );
	var velocity = get_velocity(localplayer_index)
	font = Render.AddFont( "Verdana", 6, 248);
	font2 = Render.AddFont( "Thintel", 10	, 666);
    x = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "window_x"),
    y = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "window_y");
    rainbow = [
        
    ];
    Render.Rect(x - 1, y - 1, 282, 61 + 15 * ( - 1), [2, 2, 2, 100]);
    Render.FilledRect(x, y, 280, 60 + 15 * ( - 1), [55, 55, 55, 200]);
    Render.Rect(x + 5, y + 5, 270, 50 + 15 * ( - 1), [2, 2, 2, 100]);
    Render.FilledRect(x + 5, y + 5, 270, 50 + 15 * ( - 1), [25, 25, 25, 200]);
	Render.FilledRect(x + 3, y + 3, 274, 54 + 15 * ( - 1), [25, 25, 25, 100]);
	
    //Render.FilledRect(x + 9, y + 20, 261, 2, [colors.g,colors.b,colors.r, 255], [colors.g,colors.b,colors.r, 124]);
	//Render.FilledRect(x + 9, y + 20, 261, 2, [colors.r,colors.b,colors.g, 255], [colors.g,colors.r,colors.b, 124]);
	
	Render.GradientRect(x+5, y+20, 267, 2, 1, [colors.g, colors.b, colors.r, 255], [colors.r, colors.g, colors.b, 255]);
    Render.GradientRect(x+5, y+20, 267, 2, 1, [colors.r, colors.g, colors.b, 255], [colors.b, colors.r, colors.g, 255]);
    Render.StringCustom(x + 140, y + 9, 1, "CORNERSTONE", [255, 255, 255, 255], font2);
	Render.StringCustom(x + 38, y + 24, 1, "FPS: ", [255, 255, 255, 255], font);//+Math.floor(1/Global.Frametime().toString())
	Render.StringCustom(x + 100, y + 24, 1, "PING: ", [255, 255, 255, 255], font);//+Math.round(Global.Latency() * 1000).toString()
	Render.StringCustom(x + 170, y + 24, 1, "SPEED: ", [255, 255, 255, 255], font);//+Math.round(velocity).toString()
    Render.StringCustom(x + 237, y + 24, 1, "TICK: ", [255, 255, 255, 255], font);//+Globals.Tickrate().toString()
	Render.StringCustom(x + 56, y + 24, 1,"" +Math.floor(1/Global.Frametime().toString()), [255, 255, 255, 255], font);
	Render.StringCustom(x + 116, y + 24, 1,"" +Math.round(Global.Latency() * 1000).toString(), [255, 255, 255, 255], font);
	Render.StringCustom(x + 196, y + 24, 1,"" +Math.round(velocity).toString(), [255, 255, 255, 255], font);
	Render.StringCustom(x + 256, y + 24, 1,"" +Globals.Tickrate().toString(), [255, 255, 255, 255], font);
}
Global.RegisterCallback("Draw", "draw")

	