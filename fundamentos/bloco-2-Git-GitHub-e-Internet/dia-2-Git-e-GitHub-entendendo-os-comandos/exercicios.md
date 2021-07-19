### exercício 1 
```bash
➜  trybe-exercicios git:(main) cd fundamentos 
➜  fundamentos git:(main) cd bloco-2-Git-GitHub-e-Internet 
➜  bloco-2-Git-GitHub-e-Internet git:(main) cd dia-1-Git-e-GitHub-O-que-é-e-para-que-serve 
➜  dia-1-Git-e-GitHub-O-que-é-e-para-que-serve git:(main) ls
trybe-skills.txt
➜  dia-1-Git-e-GitHub-O-que-é-e-para-que-serve git:(main) 
```
### exercício 2
```bash
➜  dia-1-Git-e-GitHub-O-que-é-e-para-que-serve git:(main) git status 
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```
### exercício 3
```bash
➜  dia-1-Git-e-GitHub-O-que-é-e-para-que-serve git:(main) git checkout -b trybe-skills-changes
Switched to a new branch 'trybe-skills-changes'
➜  dia-1-Git-e-GitHub-O-que-é-e-para-que-serve git:(trybe-skills-changes) git status
On branch trybe-skills-changes
nothing to commit, working tree clean
```
### exercício 4
```bash
➜  dia-2-Git-e-GitHub-entendendo-os-comandos git:(trybe-skills-changes) ✗ cat >> trybe-skills-change.txt 
HTML
CSS
➜  dia-2-Git-e-GitHub-entendendo-os-comandos git:(trybe-skills-changes) ✗ cat trybe-skills-change.txt 
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
- HTML
- CSS

➜  dia-2-Git-e-GitHub-entendendo-os-comandos git:(trybe-skills-changes) ✗ git add trybe-skills-change.txt 
➜  dia-2-Git-e-GitHub-entendendo-os-comandos git:(trybe-skills-changes) ✗ git status 
On branch trybe-skills-changes
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   trybe-skills-change.txt

➜  dia-2-Git-e-GitHub-entendendo-os-comandos git:(trybe-skills-changes) ✗ git commit -m "mudança arquivo skills"
[trybe-skills-changes 6692a76] mudança arquivo skills
 1 file changed, 7 insertions(+)
 create mode 100644 fundamentos/bloco-2-Git-GitHub-e-Internet/dia-2-Git-e-GitHub-entendendo-os-comandos/trybe-skills-change.txt
➜  dia-2-Git-e-GitHub-entendendo-os-comandos git:(trybe-skills-changes) git push -u origin trybe-skills-changes
Warning: Permanently added the RSA host key for IP address '140.82.112.3' to the list of known hosts.
Enter passphrase for key '/Users/luizmodolo/.ssh/id_rsa': 
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 4 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 559 bytes | 559.00 KiB/s, done.
Total 6 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
remote: 
remote: Create a pull request for 'trybe-skills-changes' on GitHub by visiting:
remote:      https://github.com/LuizModolo/Trybe/pull/new/trybe-skills-changes
remote: 
To github.com:LuizModolo/Trybe.git
 * [new branch]      trybe-skills-changes -> trybe-skills-changes
Branch 'trybe-skills-changes' set up to track remote branch 'trybe-skills-changes' from 'origin'.
```
### exercicio 5

![](/Users/luizmodolo/Pictures/img_trybe/01.png)

### exercicio 6
```bash
➜  bloco-2-Git-GitHub-e-Internet git:(trybe-skills-changes) git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
```
### exercicio 7
```bash
➜  bloco-2-Git-GitHub-e-Internet git:(main) git branch
* main
  trybe-skills-changes
(END)
➜  bloco-2-Git-GitHub-e-Internet git:(main) cd dia-2-Git-e-GitHub-entendendo-os-comandos 
➜  dia-2-Git-e-GitHub-entendendo-os-comandos git:(main) ls
exercicios.md
```
### exercicio 8
```bash
➜  dia-2-Git-e-GitHub-entendendo-os-comandos git:(main) git checkout -b trybe-skills-updates
Switched to a new branch 'trybe-skills-updates'
```
### exercicio 9
```bash
➜  dia-2-Git-e-GitHub-entendendo-os-comandos git:(trybe-skills-updates) ✗ cat >> trybe-skills-change.txt 
- Softskills
➜  dia-2-Git-e-GitHub-entendendo-os-comandos git:(trybe-skills-updates) ✗ cat trybe-skills-change.txt 
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
- Softskills
➜  dia-2-Git-e-GitHub-entendendo-os-comandos git:(trybe-skills-updates) ✗ git add trybe-skills-change.txt 
➜  dia-2-Git-e-GitHub-entendendo-os-comandos git:(trybe-skills-updates) ✗ git status 
On branch trybe-skills-updates
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	new file:   trybe-skills-change.txt

➜  dia-2-Git-e-GitHub-entendendo-os-comandos git:(trybe-skills-updates) ✗ git commit -m "adicionando skills"
[trybe-skills-updates c27ab9a] adicionando skills
 1 file changed, 6 insertions(+)
 create mode 100644 fundamentos/bloco-2-Git-GitHub-e-Internet/dia-2-Git-e-GitHub-entendendo-os-comandos/trybe-skills-change.txt
➜  dia-2-Git-e-GitHub-entendendo-os-comandos git:(trybe-skills-updates) git push -u origin trybe-skills-updates
Enter passphrase for key '/Users/luizmodolo/.ssh/id_rsa': 
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 4 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 551 bytes | 551.00 KiB/s, done.
Total 6 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
remote: 
remote: Create a pull request for 'trybe-skills-updates' on GitHub by visiting:
remote:      https://github.com/LuizModolo/Trybe/pull/new/trybe-skills-updates
remote: 
To github.com:LuizModolo/Trybe.git
 * [new branch]      trybe-skills-updates -> trybe-skills-updates
Branch 'trybe-skills-updates' set up to track remote branch 'trybe-skills-updates' from 'origin'.
```
### exercicio 10


