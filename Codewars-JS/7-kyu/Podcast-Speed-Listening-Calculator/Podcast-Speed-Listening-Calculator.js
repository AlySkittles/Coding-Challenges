/*
If you have ever listened to an audiobook or podcast, you may have had the option to change the play speed of the audio. This allows you to increase or decrease the speed that you listen to your content.

I want you to calculate the time it takes to listen to the audio when the play speed is varied. The time should be rounded down to whole seconds.

The inputs will be:

// audioLength /* a string of the total time of the audio, "hh:mm:ss" */

// playSpeed /* a float between 0.5 and 3.0, only to 1 decimal point */

//Examples:

// The results of calculations on the time units are expected to be truncated/floored

// speedListen("00:00:55", 2) => "00:00:27" // NOT "00:00:28"

// speedListen("01:20:00", 1.5) => "00:53:20"


//My Solution

function speedListen(audioLength, playSpeed) {
    [hours, mins, seconds] = audioLength.split(':')
    let audioSeconds = hours * (60 * 60) + mins * 60 + seconds * 1

    let newLength = audioSeconds / playSpeed
    let newLenHrs = ~~(newLength / (60 * 60))
    let newLenMins = ~~(newLength % (60 * 60) / 60)
    let newLenSecs = ~~(newLength % 60)

    return [newLenHrs, newLenMins, newLenSecs].map(v => String(v).padStart(2, 0)).join(':')
    
}