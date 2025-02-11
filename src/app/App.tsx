import { AppRouter } from './providers/router';
import styles from './App.module.scss';
function App() {
  return (
    <div className={styles.app}>
      <AppRouter />
    </div>
  );
}

export default App;
