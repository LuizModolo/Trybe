### Parte 1
```bash
➜  unix-e-bash-parte-1 git:(ex/1.3) # exercício 1
➜  unix-e-bash-parte-1 git:(ex/1.3) mkdir unix_tests
➜  unix-e-bash-parte-1 git:(ex/1.3) cd unix_tests
```
```bash
➜  unix_tests git:(ex/1.3) # exercício 2
➜  unix_tests git:(ex/1.3) touch trybe.txt
➜  unix_tests git:(ex/1.3) ✗ ls
trybe.txt
```
```bash
➜  unix_tests git:(ex/1.3) ✗ # exercício 3
➜  unix_tests git:(ex/1.3) ✗ cp trybe.txt trybe_backup.txt
➜  unix_tests git:(ex/1.3) ✗ ls
trybe.txt        trybe_backup.txt
```
```bash
➜  unix_tests git:(ex/1.3) ✗ # exercício 4
➜  unix_tests git:(ex/1.3) ✗ mv trybe.txt trybe_renamed.txt
➜  unix_tests git:(ex/1.3) ✗ ls
trybe_backup.txt  trybe_renamed.txt
```
```bash
➜  unix_tests git:(ex/1.3) ✗ # exrcício 5
➜  unix_tests git:(ex/1.3) ✗ mkdir backup
➜  unix_tests git:(ex/1.3) ✗ ls
backup            trybe_backup.txt  trybe_renamed.txt
```
```bash
➜  unix_tests git:(ex/1.3) ✗ # exercício 6
➜  unix_tests git:(ex/1.3) ✗ mv trybe_backup.txt backup
➜  unix_tests git:(ex/1.3) ✗ ls
backup            trybe_renamed.txt
➜  unix_tests git:(ex/1.3) ✗ cd backup
➜  backup git:(ex/1.3) ✗ ls
trybe_backup.txt
```
```bash
➜  backup git:(ex/1.3) ✗ # exercício 7
➜  backup git:(ex/1.3) ✗ cd ..
➜  unix_tests git:(ex/1.3) ✗ mkdir backup2
➜  unix_tests git:(ex/1.3) ✗ ls
backup            backup2           trybe_renamed.txt
```
```bash
➜  unix_tests git:(ex/1.3) ✗ # exercício 8
➜  unix_tests git:(ex/1.3) ✗ mv backup/trybe_backup.txt backup2/
➜  unix_tests git:(ex/1.3) ✗ cd backup2
➜  backup2 git:(ex/1.3) ✗ ls
trybe_backup.txt
```
```bash
➜  backup2 git:(ex/1.3) ✗ # exercício 9
➜  backup2 git:(ex/1.3) ✗ cd ..
➜  unix_tests git:(ex/1.3) ✗ rmdir backup
➜  unix_tests git:(ex/1.3) ✗ ls
backup2           trybe_renamed.txt
```
```bash
➜  unix_tests git:(ex/1.3) ✗ # exercício 10
➜  unix_tests git:(ex/1.3) ✗ mv backup2 backup
➜  unix_tests git:(ex/1.3) ✗ ls
backup            trybe_renamed.txt
```
```bash
➜  unix_tests git:(ex/1.3) ✗ # exercício 11
➜  unix_tests git:(ex/1.3) ✗ pwd
/Users/luizmodolo/trybe/trybe-exercicios/fundamentos/bloco-1-unix-e-shell/unix-e-bash-parte-1/unix_tests
➜  unix_tests git:(ex/1.3) ✗ ls
backup            trybe_renamed.txt
```
```bash
➜  unix_tests git:(ex/1.3) ✗ # exercício 12
➜  unix_tests git:(ex/1.3) ✗ rm -rf backup
➜  unix_tests git:(ex/1.3) ✗ ls
trybe_renamed.txt
```
```bash
➜  unix_tests git:(ex/1.3) ✗ # exercício 13
➜  unix_tests git:(ex/1.3) ✗ clear
```
```bash
➜  unix_tests git:(ex/1.3) ✗ # exercício 14
➜  unix_tests git:(ex/1.3) ✗ cat > skills.txt
Internet
Unix
Bash
HTML
CSS
➜  unix_tests git:(ex/1.3) ✗ ls
skills.txt        trybe_renamed.txt
➜  unix_tests git:(ex/1.3) ✗ head -5 skills.txt 
Internet
Unix
Bash
HTML
CSS
```
```bash
➜  unix_tests git:(ex/1.3) ✗ # exercício 15
➜  unix_tests git:(ex/1.3) ✗ tail -4 skills.txt 
Unix
Bash
HTML
CSS
```
```bash
➜  unix_tests git:(ex/1.3) ✗ # exercício 16
➜  unix_tests git:(ex/1.3) ✗ rm *.txt
➜  unix_tests git:(ex/1.3) ls
```




