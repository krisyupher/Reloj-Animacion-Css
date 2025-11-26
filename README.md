# Analog Clock with Vintage Steampunk Design

A beautiful, functional analog clock built with HTML, CSS, and vanilla JavaScript. Features a steampunk/vintage aesthetic with smooth hand animations and real-time updates.

**Live Demo:** https://krisyupher.github.io/Reloj-Animacion-Css/

---

## Features

- ⏰ **Real-time Clock** - Displays accurate system time with smooth hand movement
- 🎨 **Steampunk Design** - Vintage aesthetic with warm beige face and dark metallic borders
- 🚀 **Smooth Animation** - Clock hands move smoothly with millisecond precision
- 📱 **Responsive** - Works seamlessly on all screen sizes
- ⚡ **Lightweight** - Minimal, clean code with no dependencies
- 🎯 **Centered Hands** - All hands properly aligned and rotating from the center pivot

---

## Project Structure

```
Reloj-Animacion-Css/
├── index.html          # Main HTML structure
├── css/
│   └── animaciones.css # Styling and animations
├── js/
│   └── clock.js        # Clock functionality (vanilla JavaScript)
├── img/                # Clock hand images
│   ├── AgujaSegundos.png  # Second hand
│   ├── AgujaGrande.png    # Minute hand
│   └── AgujaPeque.png     # Hour hand
├── README.md           # This file
└── CNAME               # GitHub Pages configuration
```

---

## Technical Details

### HTML (`index.html`)
- Semantic structure with clock containers
- Roman numerals (III, VI, IX, XII) for time markers
- Three hand containers (hour, minute, second)
- Single script import for clock functionality

### CSS (`css/animaciones.css`)
- **Color Scheme:**
  - Background: Dark gray (#2a2a2a)
  - Outer circle: Dark metallic gradient
  - Clock face: Warm beige/tan (#d4af8f to #b8956f)
  - Roman numerals: Dark gray (#1a1a1a)
  - Hands: Gradient colors with shadow effects

- **Design Elements:**
  - Radial gradients for 3D effect
  - Inset box shadows for depth
  - Drop shadows for elevation
  - Centered pivot point (24px diameter)

### JavaScript (`js/clock.js`)
```javascript
class Clock {
  // Calculates hand rotation based on current time
  // Updates every 100ms for smooth animation
  // Uses trigonometric formulas for precision
}
```

**Hand Rotation Formulas:**
- Second hand: `(seconds + milliseconds/1000) * 6°`
- Minute hand: `(minutes + seconds/60) * 6°`
- Hour hand: `(hours + minutes/60) * 30°`

---

## How It Works

1. **Initialization**: When the page loads, the `Clock` class initializes
2. **Timer Loop**: Updates every 100ms for smooth animation
3. **Time Calculation**: Gets current system time and calculates angles
4. **Hand Rotation**: Applies CSS transforms to rotate each hand
5. **Continuous Cycle**: Loop continues indefinitely

---

## Customization

### Change Clock Face Color
Edit `animaciones.css` - `.CirculoInterior`:
```css
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

### Change Hand Colors
Modify gradient colors in:
- `.Sgundero` - Second hand
- `.Minutero` - Minute hand
- `.Hora` - Hour hand

### Adjust Clock Size
Change viewport height in `.CirculoExterior` and `.CirculoInterior`:
```css
height: 55vh; /* Outer */
width: 55vh;
height: 50vh; /* Inner */
width: 50vh;
```

### Change Animation Speed
Edit `clock.js` update interval:
```javascript
setInterval(() => this.updateClock(), 100); // Change 100ms to desired value
```

---

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ❌ Not supported (uses modern JavaScript features)

---

## Performance

- **File Size**: ~5KB total (HTML + CSS + JS)
- **Update Rate**: 100ms (10 FPS visual updates)
- **CPU Usage**: Minimal - only CSS transforms
- **Memory**: Negligible footprint

---

## License

Open source - Feel free to use and modify!

---

## Version History

### v2.0 (Current)
- Cleaned up codebase
- Removed unnecessary caching functionality
- Steampunk/vintage design overhaul
- Fixed hand centering issues
- Restored custom clock hand images

### v1.0
- Initial implementation
- CSS-based animations
- Basic clock functionality

---

## Credits

Created by: [@krisyupher](https://github.com/krisyupher)

---

## Questions?

Feel free to open an issue or submit a pull request!
