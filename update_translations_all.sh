#!/bin/bash
for l in cn cz de dk es fi fr it jp nl no pl pt ro ru se sk uk; do
  npx docusaurus write-translations --locale $l
done