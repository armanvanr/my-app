import { Delete, Send, Save, Info } from '@mui/icons-material';
import CustomButton from './components/custom-button';

const buttonColors = ['primary', 'secondary', 'info', 'success', 'warning', 'error'] as const;
const buttonSizes = ['small', 'medium', 'large'] as const;
const iconSizes = ['small', 'medium', 'large'] as const;
const iconPositions = ['left', 'right'] as const;
const tooltipPositions = ['top', 'bottom', 'left', 'right'] as const;

function App() {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

      <section>
        <h2>1️⃣ 🎨 Button Colors</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {buttonColors.map((color) => (
            <CustomButton
              key={color}
              bgColor={color}
              buttonText={color.charAt(0).toUpperCase() + color.slice(1)}
              icon={<Send />}
              iconSize="medium"
              tooltipText={`This is a ${color} button`}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>2️⃣ 📐 Button Sizes</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {buttonSizes.map((size) => (
            <CustomButton
              key={size}
              bgColor="primary"
              buttonText={`Size: ${size}`}
              icon={<Save />}
              size={size}
              iconSize="medium"
              tooltipText={`Button size: ${size}`}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>3️⃣ 🔠 Icon Sizes</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {iconSizes.map((iconSize) => (
            <CustomButton
              key={iconSize}
              bgColor="secondary"
              buttonText={`Icon: ${iconSize}`}
              icon={<Delete />}
              iconSize={iconSize}
              size="medium"
              tooltipText={`Icon size: ${iconSize}`}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>4️⃣ ↔️ Icon Positions</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {iconPositions.map((position) => (
            <CustomButton
              key={position}
              bgColor="info"
              buttonText={`Icon: ${position}`}
              icon={<Send />}
              iconPosition={position}
              tooltipText={`Icon on the ${position}`}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>5️⃣ 💡 Tooltip Positions</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {tooltipPositions.map((pos) => (
            <CustomButton
              key={pos}
              bgColor="success"
              buttonText={`Tooltip: ${pos}`}
              icon={<Save />}
              tooltipPosition={pos}
              tooltipText={`Tooltip at ${pos}`}
            />
          ))}
        </div>
      </section>

      <section>
        <h2>6️⃣ 🛠 Use Without Icon</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <CustomButton
            bgColor="warning"
            buttonText="No Icon"
            size="large"
            tooltipText="No icon here!"
          />
          <CustomButton
            bgColor="error"
            buttonText="Text Only"
            size="medium"
          />
        </div>
      </section>

      <section>
        <h2>7️⃣ 🧠 Use Without Tooltip</h2>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <CustomButton
            bgColor="secondary"
            buttonText="Icon Only"
            icon={<Info />}
            size="medium"
          />
          <CustomButton
            bgColor="primary"
            buttonText="Classic"
            icon={<Save />}
            size="small"
          />
        </div>
      </section>

    </div>
  );
}

export default App;
