let SessionLoad = 1
if &cp | set nocp | endif
let s:cpo_save=&cpo
set cpo&vim
inoremap <silent> <C-F8> :RandomColorScheme
inoremap <silent> <S-F8> :PrevColorScheme
inoremap <silent> <F8> :NextColorScheme
map  
map  
noremap cp go"+yG
vmap gx <Plug>NetrwBrowseXVis
nmap gx <Plug>NetrwBrowseX
noremap md ocout << "Here \n";<C-Esc>
noremap mo ocout << 
noremap min ocin >> 
noremap mr oreverse(a.begin(), a.end());<C-Esc>^fa
noremap mprec ocout << setprecision(8) << fixed;<C-Esc>
noremap mios oios_base::sync_with_stdio(0);<C-Esc>ocin.tie(0);<C-Esc>
noremap ms osort(a.begin(), a.end());<C-Esc>^fa
noremap ml oLocal;<C-Esc>
noremap mw owhile (1) {<C-Esc>o}<C-Esc>kf1
noremap mfa ofor (auto i : v) {<C-Esc>o}<C-Esc>k^fv
noremap mfR ofor (int i = n; i >= 1; --i) {<C-Esc>o}<C-Esc>k^fn;
noremap mfr ofor (int i = n - 1; i >= 0; --i) {<C-Esc>o}<C-Esc>k^fn;
noremap mfJ ofor (int j = 1; j <= n; ++j) {<C-Esc>o}<C-Esc>k^fn;
noremap mfj ofor (int j = 0; j < n; ++j) {<C-Esc>o}<C-Esc>k^fn;
noremap mfI ofor (int i = 1; i <= n; ++i) {<C-Esc>o}<C-Esc>k^fn;
noremap mfi ofor (int i = 0; i < n; ++i) {<C-Esc>o}<C-Esc>k^fn;
noremap mff ofor (int i = 0; i < n; ++i) {<C-Esc>o}<C-Esc>k^fn;
vnoremap <silent> <Plug>NetrwBrowseXVis :call netrw#BrowseXVis()
nnoremap <silent> <Plug>NetrwBrowseX :call netrw#BrowseX(expand((exists("g:netrw_gx")? g:netrw_gx : '<cfile>')),netrw#CheckIfRemote())
nnoremap <silent> <C-F8> :RandomColorScheme
nnoremap <silent> <S-F8> :PrevColorScheme
nnoremap <silent> <F8> :NextColorScheme
nnoremap <F1> :%!python -m json.tool
nnoremap <F2> :!g++ -Wall -o a % && echo Compiled... && ./a
nnoremap <F3> :!echo Ready... && ./a
nnoremap <F5> :!g++ -Wall -o a %
cnoremap  <Home>
cnoremap  <Left>
cnoremap  <Del>
cnoremap  <End>
inoremap  
cnoremap  <Right>
cnoremap  <Down>
cnoremap  <Up>
inoremap  
cnoremap  <S-Right>
cnoremap  <S-Left>
let &cpo=s:cpo_save
unlet s:cpo_save
set autoindent
set background=dark
set backspace=indent,eol,start
set expandtab
set hlsearch
set incsearch
set matchpairs=(:),{:},[:],<:>
set ruler
set runtimepath=~/.vim,~/.vim/bundle/Vundle.vim,~/.vim/bundle/indentLine,~/.vim/bundle/vim-autoformat,/usr/share/vim/vimfiles,/usr/share/vim/vim80,/usr/share/vim/vimfiles/after,~/.vim/after,~/.vim/bundle/Vundle.vim,~/.vim/bundle/Vundle.vim/after,~/.vim/bundle/indentLine/after,~/.vim/bundle/vim-autoformat/after
set shiftwidth=4
set showcmd
set showmatch
set smartindent
set suffixes=.bak,~,.swp,.o,.info,.aux,.log,.dvi,.bbl,.blg,.brf,.cb,.ind,.idx,.ilg,.inx,.out,.toc,.png,.jpg
set tabline=%!MyTabLine()
set tabstop=4
set ttimeoutlen=1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/cargame/js
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +0 game.js
argglobal
silent! argdel *
$argadd game.js
edit game.js
set splitbelow splitright
set nosplitbelow
set nosplitright
wincmd t
set winminheight=1 winheight=1 winminwidth=1 winwidth=1
argglobal
setlocal keymap=
setlocal noarabic
setlocal autoindent
setlocal backupcopy=
setlocal balloonexpr=
setlocal nobinary
setlocal nobreakindent
setlocal breakindentopt=
setlocal bufhidden=
setlocal buflisted
setlocal buftype=
setlocal nocindent
setlocal cinkeys=0{,0},0),:,0#,!^F,o,O,e
setlocal cinoptions=
setlocal cinwords=if,else,while,do,for,switch
setlocal colorcolumn=
setlocal comments=sO:*\ -,mO:*\ \ ,exO:*/,s1:/*,mb:*,ex:*/,://
setlocal commentstring=//%s
setlocal complete=.,w,b,u,t,i
setlocal concealcursor=inc
setlocal conceallevel=2
setlocal completefunc=
setlocal nocopyindent
setlocal cryptmethod=
setlocal nocursorbind
setlocal nocursorcolumn
setlocal nocursorline
setlocal define=
setlocal dictionary=
setlocal nodiff
setlocal equalprg=
setlocal errorformat=
setlocal expandtab
if &filetype != 'javascript'
setlocal filetype=javascript
endif
setlocal fixendofline
setlocal foldcolumn=0
setlocal foldenable
setlocal foldexpr=0
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldmarker={{{,}}}
setlocal foldmethod=manual
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldtext=foldtext()
setlocal formatexpr=
setlocal formatoptions=croql
setlocal formatlistpat=^\\s*\\d\\+[\\]:.)}\\t\ ]\\s*
setlocal formatprg=
setlocal grepprg=
setlocal iminsert=2
setlocal imsearch=2
setlocal include=
setlocal includeexpr=
setlocal indentexpr=GetJavascriptIndent()
setlocal indentkeys=0{,0},:,0#,!^F,o,O,e,0],0)
setlocal noinfercase
setlocal iskeyword=@,48-57,_,192-255
setlocal keywordprg=
setlocal nolinebreak
setlocal nolisp
setlocal lispwords=
setlocal nolist
setlocal makeencoding=
setlocal makeprg=
setlocal matchpairs=(:),{:},[:],<:>
setlocal modeline
setlocal modifiable
setlocal nrformats=bin,octal,hex
set number
setlocal number
setlocal numberwidth=4
setlocal omnifunc=javascriptcomplete#CompleteJS
setlocal path=
setlocal nopreserveindent
setlocal nopreviewwindow
setlocal quoteescape=\\
setlocal noreadonly
setlocal norelativenumber
setlocal norightleft
setlocal rightleftcmd=search
setlocal noscrollbind
setlocal shiftwidth=4
setlocal noshortname
setlocal signcolumn=auto
setlocal nosmartindent
setlocal softtabstop=0
setlocal nospell
setlocal spellcapcheck=[.?!]\\_[\\])'\"\	\ ]\\+
setlocal spellfile=
setlocal spelllang=en
setlocal statusline=
setlocal suffixesadd=
setlocal swapfile
setlocal synmaxcol=3000
if &syntax != 'javascript'
setlocal syntax=javascript
endif
setlocal tabstop=4
setlocal tagcase=
setlocal tags=
setlocal textwidth=0
setlocal thesaurus=
setlocal noundofile
setlocal undolevels=-123456
setlocal nowinfixheight
setlocal nowinfixwidth
set nowrap
setlocal nowrap
setlocal wrapmargin=0
silent! normal! zE
let s:l = 280 - ((41 * winheight(0) + 21) / 42)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
280
normal! 0
tabnext 1
if exists('s:wipebuf')
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToO
set winminheight=1 winminwidth=1
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
