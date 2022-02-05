#!/bin/sh

###############################################################################
#  Git Script                                                                 #
#                                                                             #
#  Author: Ducílio Mateus Manjate  <liomanjate@.com>                         #
###############################################################################
#                                                                             #
#  This script, is to be used after a approved pull request in main repo      #
#  branch.                               				                      #
#                                                                             #
###############################################################################


git checkout master
git fetch -p
git pull origin master

