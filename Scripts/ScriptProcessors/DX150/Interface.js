Content.makeFrontInterface(700, 500);
const var WaveformGenerator1 = Synth.getChildSynth("Waveform Generator1");


//Change GUI tab
//Grab References
const var NUM_TABS = 2;
const var leds = [];
const var buttons = [];

for (i = 0; i < NUM_TABS; i++)
{
    leds[i] = Content.getComponent("GUI"+(i+1));
        buttons[i] = Content.getComponent("GUIButton"+(i+1));
    buttons[i].setControlCallback(changeTab);
}

//Tab Button Callback function
inline function changeTab(component, value)
{
    if (value)
    {
        //get index of clicked button
        local idx = buttons.indexOf(component);
        
        //Hide all leds
        for (i = 0; i < leds.length; i++)
        {
            leds[i].showControl(false);
        }
            
        //Show Selected led
        leds[idx].showControl(true);
    }
}

//PENCIL 
const var Knob1 = Content.getComponent("Knob1");

//LFO Wave Selector
const var TriangleSineMod = Synth.getModulator("TriangleSineMod");
const var SquareSineMod = Synth.getModulator("SquareSineMod");
const var Panel1 = Content.getComponent("Panel1");
const var Panel2 = Content.getComponent("Panel2");

inline function onLFOWaveButtonControl(component, value)
{
	if(value==1)
    {
        TriangleSineMod.setBypassed(true);
        SquareSineMod.setBypassed(false);
	    Panel1.showControl(true);
	    Panel2.showControl(false);
    }
	if(value==0)
    {
        SquareSineMod.setBypassed(true);
        TriangleSineMod.setBypassed(false);
	    Panel1.showControl(false);
	    Panel2.showControl(true);
    }
};

Content.getComponent("LFOWaveButton").setControlCallback(onLFOWaveButtonControl);

//Delay Controls
const var Delay1 = Synth.getEffect("Delay1");


inline function onDelayTimeknobControl(component, value)
{
	Delay1.setAttribute(Delay1.DelayTimeLeft, value);
	Delay1.setAttribute(Delay1.DelayTimeRight, value);
};

Content.getComponent("ScriptSlider23").setControlCallback(onDelayTimeknobControl);

inline function onDelayFeedknobControl(component, value)
{
	Delay1.setAttribute(Delay1.FeedbackLeft, value);
	Delay1.setAttribute(Delay1.FeedbackRight, value);
};

Content.getComponent("ScriptSlider22").setControlCallback(onDelayFeedknobControl);

//Preset Panel

const var PresetsPanel = Content.getComponent("PresetsPanel");

inline function onPresetsButtonControl(component, value)
{
	if(value==1)
	    PresetsPanel.showControl(true);
	if(value==0)
	    PresetsPanel.showControl(false);
};

Content.getComponent("PresetsButton").setControlCallback(onPresetsButtonControl);

//License Panel

const var LicensePanel = Content.getComponent("LicensePanel");

inline function onLicenseButtonControl(component, value)
{
	if(value==1)
	    LicensePanel.showControl(true);
	if(value==0)
	    LicensePanel.showControl(false);
};

Content.getComponent("LicenseButton").setControlCallback(onLicenseButtonControl);

//Options Panel

const var OptionsPanel = Content.getComponent("OptionsPanel");

inline function onOptionsButtonControl(component, value)
{
	if(value==1)
	    OptionsPanel.showControl(true);
	if(value==0)
	    OptionsPanel.showControl(false);
};

Content.getComponent("OptionsButton").setControlCallback(onOptionsButtonControl);


//WEB

inline function onManualButtonControl(component, value)
{
if (value)
	    Engine.openWebsite("https://drbrujosounds.com/dx-150-sintetizador-de-lapiz-vst/");
};

Content.getComponent("ManualButton").setControlCallback(onManualButtonControl);
function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
		if(Message.getControllerNumber() == 128) // Pitchwheel
	{
		Knob1.setValue(Message.getControllerValue() / 127.0 / 127.0); // 14bit resolution
		
	}
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 
