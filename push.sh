#!/bin/sh
cd "$(dirname "$0")"
echo ""
echo "=== Push NTS Scaffoldings to GitHub ==="
echo ""
echo "You need a GitHub Personal Access Token."
echo "Create one at: https://github.com/settings/tokens"
echo "  -> Generate new token (classic) -> tick 'repo' -> Generate"
echo ""
printf "GitHub username: "
read USERNAME
printf "GitHub token (paste, it won't show): "
stty -echo
read TOKEN
stty echo
echo ""
echo ""
echo "Pushing to GitHub..."
git -c credential.helper='!f() { echo "username='$USERNAME'"; echo "password='$TOKEN'"; }; f' push origin master 2>&1
EXIT=$?
if [ $EXIT -eq 0 ]; then
  echo ""
  echo "Pushed! Vercel will deploy in ~1 min."
  echo "Check: https://ntsscaffoldings.com"
else
  echo ""
  echo "Exit code: $EXIT"
  echo ""
  echo "Troubleshooting:"
  echo "  1. Is the repo yours? https://github.com/sg199710/nts-scaffoldings-website"
  echo "  2. Token must have 'repo' scope"
  echo "  3. Token must start with ghp_ or github_pat_"
  echo "  4. Try creating a new token: https://github.com/settings/tokens/new"
  echo ""
  echo "You can also try manually:"
  echo "  git push https://USERNAME:TOKEN@github.com/sg199710/nts-scaffoldings-website.git master"
fi
