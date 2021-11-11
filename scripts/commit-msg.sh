#!/bin/bash

# Get branch name and description
BRANCH_NAME=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

BRANCH_REGEX='^((feature|bugfix|hotfix)\/[a-zA-Z0-9\-]+)$'

MESSAGE="O padrão para o nome da branch está incorreto. O nome da branch dentro do projeto deve estar dentro do seguinte regex: $BRANCH_REGEX. Seu commit será rejeitado. Você deve renomear sua branch para um nome válido e tentar novamente."

if [[ ! $BRANCH_NAME =~ $BRANCH_REGEX ]]; then
    echo "$MESSAGE"
    exit 1
fi



#
# Automatically adds branch name and branch description to every commit message.
# Modified from github comment here https://github.com/typicode/husky/issues/311#issuecomment-401878181
#

# This way you can customize which branches should be skipped when
# prepending commit message.
if [ -z "$BRANCHES_TO_SKIP" ]; then
  BRANCHES_TO_SKIP=(master develop)
fi

# Branch name should be excluded from the prepend
BRANCH_EXCLUDED=$(printf "%s\n" "${BRANCHES_TO_SKIP[@]}" | grep -c "^$BRANCH_NAME$")

# A developer has already prepended the commit
BRANCH_IN_COMMIT=$(grep -c "$BRANCH_NAME" ".git/COMMIT_EDITMSG")

ONLY_TASK_CODE=$(sed -e 's#.*/\(\)#\1#' <<< "$BRANCH_NAME")

if [ -n "$BRANCH_NAME" ] && ! [[ $BRANCH_EXCLUDED -eq 1 ]] && ! [[ $BRANCH_IN_COMMIT -ge 1 ]]; then
  sed -i.bak -e "s/^/$ONLY_TASK_CODE /" ".git/COMMIT_EDITMSG"
fi
