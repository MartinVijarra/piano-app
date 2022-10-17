let context = new AudioContext()

function notas(frecuencia) {
    let o = context.createOscillator()
    let g = context.createGain()

    o.connect(g)
    o.type="sawtooth"
    o.frequency.value = frecuencia
    g.connect(context.destination)
    o.start(0)
    g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime + 1.5)
}
