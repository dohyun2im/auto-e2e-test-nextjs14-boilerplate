if [ "$(uname)" == "Darwin" ]; then
  if pgrep node >/dev/null; then
    killall -9 node
    echo "Killed all 'node' processes."
  fi
fi

npm run build && npm run test
