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



