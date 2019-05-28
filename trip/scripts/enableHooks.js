const { execSync } = require('child_process')

function enableRnHooks() {
  execSync(
    'cp -R scripts/rn-renderer/* /node_modules/react-native/Libraries/Renderer',
    {
      stdio: 'inherit',
    }
  )
}

enableRnHooks()