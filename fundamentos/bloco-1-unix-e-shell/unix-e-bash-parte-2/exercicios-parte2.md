### exercício 1 ###
```bash
➜  trybe-exercicios git:(ex/1.4) cd fundamentos 
➜  fundamentos git:(ex/1.4) cd bloco-1-unix-e-shell 
➜  bloco-1-unix-e-shell git:(ex/1.4) cd unix-e-bash-parte-2
➜  unix-e-bash-parte-2 git:(ex/1.4) cd unix_tests 
```
### exercício 2 ###
```bash
➜  unix_tests git:(ex/1.4) ✗ ls -l
total 56
-rw-r--r--  1 luizmodolo  staff  1983 23 Jul 13:43 bunch_of_things.txt
-rw-r--r--  1 luizmodolo  staff  1842 19 Jul 13:23 countries.txt
-rw-r--r--  1 luizmodolo  staff     0 19 Jul 13:23 empty.pdf
-rw-r--r--  1 luizmodolo  staff     0 19 Jul 13:23 empty.tbt
-rw-r--r--  1 luizmodolo  staff   180 19 Jul 13:23 phrases.txt
-rw-r--r--  1 luizmodolo  staff   141 23 Jul 13:41 phrases2.txt
-rw-r--r--  1 luizmodolo  staff    50 23 Jul 13:32 skills2.txt
-rw-r--r--  1 luizmodolo  staff    50 23 Jul 13:35 top_skills.txt
-rw-r--r--  1 luizmodolo  staff    13 23 Jul 13:36 top_skills2.txt
```
### exercício 3 ###
```bash
➜  unix_tests git:(ex/1.4) ✗ chmod a+rw bunch_of_things.txt 
➜  unix_tests git:(ex/1.4) ✗ ls -l
total 56
-rw-rw-rw-  1 luizmodolo  staff  1983 23 Jul 13:43 bunch_of_things.txt
-rw-r--r--  1 luizmodolo  staff  1842 19 Jul 13:23 countries.txt
-rw-r--r--  1 luizmodolo  staff     0 19 Jul 13:23 empty.pdf
-rw-r--r--  1 luizmodolo  staff     0 19 Jul 13:23 empty.tbt
-rw-r--r--  1 luizmodolo  staff   180 19 Jul 13:23 phrases.txt
-rw-r--r--  1 luizmodolo  staff   141 23 Jul 13:41 phrases2.txt
-rw-r--r--  1 luizmodolo  staff    50 23 Jul 13:32 skills2.txt
-rw-r--r--  1 luizmodolo  staff    50 23 Jul 13:35 top_skills.txt
-rw-r--r--  1 luizmodolo  staff    13 23 Jul 13:36 top_skills2.txt
```
### exercício 4 ###
```bash
➜  unix_tests git:(ex/1.4) ✗ ls -l
total 56
-r--r--r--  1 luizmodolo  staff  1983 23 Jul 13:43 bunch_of_things.txt
-rw-r--r--  1 luizmodolo  staff  1842 19 Jul 13:23 countries.txt
-rw-r--r--  1 luizmodolo  staff     0 19 Jul 13:23 empty.pdf
-rw-r--r--  1 luizmodolo  staff     0 19 Jul 13:23 empty.tbt
-rw-r--r--  1 luizmodolo  staff   180 19 Jul 13:23 phrases.txt
-rw-r--r--  1 luizmodolo  staff   141 23 Jul 13:41 phrases2.txt
-rw-r--r--  1 luizmodolo  staff    50 23 Jul 13:32 skills2.txt
-rw-r--r--  1 luizmodolo  staff    50 23 Jul 13:35 top_skills.txt
-rw-r--r--  1 luizmodolo  staff    13 23 Jul 13:36 top_skills2.txt
```
### exercício 5 ###
```bash
➜  unix_tests git:(ex/1.4) ✗ chmod 644 bunch_of_things.txt 
➜  unix_tests git:(ex/1.4) ✗ ls -l
total 56
-rw-r--r--  1 luizmodolo  staff  1983 23 Jul 13:43 bunch_of_things.txt
-rw-r--r--  1 luizmodolo  staff  1842 19 Jul 13:23 countries.txt
-rw-r--r--  1 luizmodolo  staff     0 19 Jul 13:23 empty.pdf
-rw-r--r--  1 luizmodolo  staff     0 19 Jul 13:23 empty.tbt
-rw-r--r--  1 luizmodolo  staff   180 19 Jul 13:23 phrases.txt
-rw-r--r--  1 luizmodolo  staff   141 23 Jul 13:41 phrases2.txt
-rw-r--r--  1 luizmodolo  staff    50 23 Jul 13:32 skills2.txt
-rw-r--r--  1 luizmodolo  staff    50 23 Jul 13:35 top_skills.txt
-rw-r--r--  1 luizmodolo  staff    13 23 Jul 13:36 top_skills2.txt
```
