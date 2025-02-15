const classicEmoticons = {
  1: ":-)",
  2: ":^)",
  3: "^_^",
  4: "(^ ^)",
  5: ":,-)",
  6: "8-)",
  7: "B-)",
  8: "o:-)",
  9: ":-D",
  10: "}:-)",
  11: ";)",
  12: ";D",
  13: ";*",
  14: ";-)",
  15: ":-*",
  16: ":-P",
  17: ":-!",
  18: ":-$",
  19: ":-X",
  20: ":-|",
  21: ":-/",
  22: ":-[",
  23: ":-(",
  24: ":'(",
  25: "(TT)",
  26: "=_=",
  27: ">.<",
  28: "(+_+)",
  29: "(*_*)",
  30: "O_o",
  31: ":-O",
  32: "=-O",
  33: ":0",
  34: ":D"
};

// const faceEmoticons = {
//   1: "0_0",
//   2: " 0_0",
//   3: "0_0 ",
//   4: "o_o",
//   5: " o_o",
//   6: "o_o ",
//   7: "O_O",
//   8: " O_O",
//   9: "O_O ",
//   10: "+_+",
//   11: "O_O! ",
//   12: " !O_O",
//   13: "*^_^*",
//   14: " *^_^",
//   15: "^_^* ",
//   16: "^_^",
//   17: " ^_^",
//   18: "^_^ ",
//   19: "-_-",
//   20: " -_-",
//   21: "-_- ",
//   22: "^.^",
//   23: " ^.^",
//   24: "^.^ ",
//   25: "*^.^*",
//   26: " *^.^",
//   27: "^.^* ",
//   28: "$_$",
//   29: " $_$",
//   30: "$_$ ",
//   31: " P_P",
//   32: " D_D",
//   33: "X_X",
//   34: " X_X",
//   35: "X_X ",
//   36: "x_x",
//   37: " x_x",
//   38: "x_x ",
//   39: "[]_[]",
//   40: " -[]_[]",
//   41: "[]_[]- ",
//   42: "{}_{}",
//   43: " -{}_{}",
//   44: "{}_{}- ",
//   45: `O_o`,
//   46: "o_O",
// };

const faceEmoticons = {
  1: "0_0",
  2: "o_o",
  3: "O_O",
  4: "+_+",
  5: "O_O!",
  6: "!O_O",
  7: "*^_^*",
  8: "^_^",
  9: "-_-",
  10: "^.^",
  11: "*^.^*",
  12: "$_$",
  13: "P_P",
  14: "D_D",
  15: "X_X",
  16: "x_x",
  17: "[]_[]",
  18: "-[]_[]",
  19: "[]_[]-",
  20: "{}_{}",
  21: "-{}_{}",
  22: "{}_{}-",
  23: `O_o`,
  24: "o_O",
};


const roundFaceEmoticons = {
  1: "(0_0)",
  2: "( 0_0)",
  3: "(0_0 )",
  4: "(o_o)",
  5: "( o_o)",
  6: "(o_o )",
  7: "(O_O)",
  8: "( O_O)",
  9: "(O_O )",
  10: "(+_+)",
  11: "(O_O! )",
  12: "( !O_O)",
  13: "(*^_^*)",
  14: "( *^_^)",
  15: "(^_^* )",
  16: "(^_^)",
  17: "( ^_^)",
  18: "(^_^ )",
  19: "(-_-)",
  20: "( -_-)",
  21: "(-_- )",
  22: "(^.^)",
  23: "( ^.^)",
  24: "(^.^ )",
  25: "(*^.^*)",
  26: "( *^.^)",
  27: "(^.^* )",
  28: "($_$)",
  29: "( $_$)",
  30: "($_$ )",
  31: "( P_P)",
  32: "( D_D)",
  33: "(X_X)",
  34: "( X_X)",
  35: "(X_X )",
  36: "(x_x)",
  37: "( x_x)",
  38: "(x_x )",
  39: "([]_[])",
  40: "( -[]_[])",
  41: "([]_[]- )",
  42: "({}_{})",
  43: "( -{}_{})",
  44: "({}_{}- )",
  45: `(O_o)`,
  46: "(o_O)",
};

const squareFaceEmoticons = {
  1: "[0_0]",
  2: "[ 0_0]",
  3: "[0_0 ]",
  4: "[o_o]",
  5: "[ o_o]",
  6: "[o_o ]",
  7: "[O_O]",
  8: "[ O_O]",
  9: "[O_O ]",
  10: "[+_+]",
  11: "[O_O! ]",
  12: "[ !O_O]",
  13: "[*^_^*]",
  14: "[ *^_^]",
  15: "[^_^* ]",
  16: "[^_^]",
  17: "[ ^_^]",
  18: "[^_^ ]",
  19: "[-_-]",
  20: "[ -_-]",
  21: "[-_- ]",
  22: "[^.^]",
  23: "[ ^.^]",
  24: "[^.^ ]",
  25: "[*^.^*]",
  26: "[ *^.^]",
  27: "[^.^* ]",
  28: "[$_$]",
  29: "[ $_$]",
  30: "[$_$ ]",
  31: "[ P_P]",
  32: "[ D_D]",
  33: "[X_X]",
  34: "[ X_X]",
  35: "[X_X ]",
  36: "[x_x]",
  37: "[ x_x]",
  38: "[x_x ]",
  39: "[()_()]",
  40: "[ -()_()]",
  41: "[()_()- ]",
  42: "[{}_{}]",
  43: "[ -{}_{}]",
  44: "[{}_{}- ]",
  45: `[O_o]`,
  46: "[o_O]",
};

const curlyFaceEmoticons = {
  1: "{0_0}",
  2: "{ 0_0}",
  3: "{0_0 }",
  4: "{o_o}",
  5: "{ o_o}",
  6: "{o_o }",
  7: "{O_O}",
  8: "{ O_O}",
  9: "{O_O }",
  10: "{+_+}",
  11: "{O_O! }",
  12: "{ !O_O}",
  13: "{*^_^*}",
  14: "{ *^_^}",
  15: "{^_^* }",
  16: "{^_^}",
  17: "{ ^_^}",
  18: "{^_^ }",
  19: "{-_-}",
  20: "{ -_-}",
  21: "{-_- }",
  22: "{^.^}",
  23: "{ ^.^}",
  24: "{^.^ }",
  25: "{*^.^*}",
  26: "{ *^.^}",
  27: "{^.^* }",
  28: "{$_$}",
  29: "{ $_$}",
  30: "{$_$ }",
  31: "{ P_P}",
  32: "{ D_D}",
  33: "{X_X}",
  34: "{ X_X}",
  35: "{X_X }",
  36: "{x_x}",
  37: "{ x_x}",
  38: "{x_x }",
  39: "{[]_[]}",
  40: "{ -[]_[]}",
  41: "{[]_[]- }",
  42: "{()_())",
  43: "{ -()_()}",
  44: "{()_()- }",
  45: `{O_o}`,
  46: "{o_O}",
};

const straightFaceEmoticons = {
  1: "|0_0|",
  2: "| 0_0|",
  3: "|0_0 |",
  4: "|o_o|",
  5: "| o_o|",
  6: "|o_o |",
  7: "|O_O|",
  8: "| O_O|",
  9: "|O_O |",
  10: "|+_+|",
  11: "|O_O! |",
  12: "| !O_O|",
  13: "|*^_^*|",
  14: "| *^_^|",
  15: "|^_^* |",
  16: "|^_^|",
  17: "| ^_^|",
  18: "|^_^ |",
  19: "|-_-|",
  20: "| -_-|",
  21: "|-_- |",
  22: "|^.^|",
  23: "| ^.^|",
  24: "|^.^ |",
  25: "|*^.^*|",
  26: "| *^.^|",
  27: "|^.^* |",
  28: "|$_$|",
  29: "| $_$|",
  30: "|$_$ |",
  31: "| P_P|",
  32: "| D_D|",
  33: "|X_X|",
  34: "| X_X|",
  35: "|X_X |",
  36: "|x_x|",
  37: "| x_x|",
  38: "|x_x |",
  39: "|()_()|",
  40: "| -()_()|",
  41: "|()_()- |",
  42: "|{}_{}|",
  43: "| -{}_{}|",
  44: "|{}_{}- |",
  45: `|O_o|`,
  46: "|o_O|",
};

const smileEmoticons = {
  1: ":)",
  2: ":D",
  3: ":P",
  4: ";)",
  5: ";*",
  6: ":*",
};

// const hugEmoticons = {
//   1: "\(0_0)/",
//   2: "\( 0_0)/",
//   3: "\(0_0 )/",
//   4: "\(o_o)/",
//   5: "\( o_o)/",
//   6: "\(o_o )/",
//   7: "\(O_O)/",
//   8: "\( O_O)/",
//   9: "\(O_O )/",
//   10: "\(+_+)/",
//   11: "\(O_O! )/",
//   12: "\( !O_O)/",
//   13: "\(*^_^*)/",
//   14: "\( *^_^)/",
//   15: "\(^_^* )/",
//   16: "\(^_^)/",
//   17: "\( ^_^)/",
//   18: "\(^_^ )/",
//   19: "\(-_-)/",
//   20: "\( -_-)/",
//   21: "\(-_- )/",
//   22: "\(^.^)/",
//   23: "\( ^.^)/",
//   24: "\(^.^ )/",
//   25: "\(*^.^*)/",
//   26: "\( *^.^)/",
//   27: "\(^.^* )/",
//   28: "\($_$)/",
//   29: "\( $_$)/",
//   30: "\($_$ )/",
//   31: "\( P_P)/",
//   32: "\( D_D)/",
//   33: "\(X_X)/",
//   34: "\( X_X)/",
//   35: "\(X_X )/",
//   36: "\(x_x)/",
//   37: "\( x_x)/",
//   38: "\(x_x )/",
//   39: "\([]_[])/",
//   40: "\( -[]_[])/",
//   41: "\([]_[]- )/",
//   42: "\({}_{})/",
//   43: "\( -{}_{})/",
//   44: "\({}_{}- )/",
//   45: `\(O_o)/`,
//   46: "(o_O)/",
//   47: "(/ 0_0)/",
//   48: "\(0_0 \)",
//   49: "(/ o_o)/",
//   50: "\(o_o \)",
//   51: "(/ O_O)/",
//   52: "\(O_O \)",
//   53: "\(O_O! \)",
//   54: "(/ !O_O)/",
//   55: "(/ *^_^)/",
//   56: "\(^_^* \)",
//   57: "(/ ^_^)/",
//   58: "\(^_^ \)",
//   59: "(/ -_-)/",
//   60: "\(-_- \)",
//   61: "(/ ^.^)/",
//   62: "\(^.^ \)",
//   63: "(/ *^.^)/",
//   64: "\(^.^* \)",
//   65: "(/ $_$)/",
//   66: "\($_$ \)",
//   67: "(/ P_P)/",
//   68: "(/ D_D)/",
//   69: "(/ X_X)/",
//   70: "\(X_X \)",
//   71: "(/ x_x)/",
//   72: "\(x_x \)",
//   73: "(/ -[]_[])/",
//   74: "\([]_[]- \)",
//   75: "(/ -{}_{})/",
//   76: "\({}_{}- \)",
// };

const hugEmoticons = {
  1: "\\(0_0)/",
  2: "\\( 0_0)/",
  3: "\\(0_0 )/",
  4: "\\(o_o)/",
  5: "\\( o_o)/",
  6: "\\(o_o )/",
  7: "\\(O_O)/",
  8: "\\( O_O)/",
  9: "\\(O_O )/",
  10: "\\(+_+)/",
  11: "\\(O_O! )/",
  12: "\\( !O_O)/",
  13: "\\(*^_^*)/",
  14: "\\( *^_^)/",
  15: "\\(^_^* )/",
  16: "\\(^_^)/",
  17: "\\( ^_^)/",
  18: "\\(^_^ )/",
  19: "\\(-_-)/",
  20: "\\( -_-)/",
  21: "\\(-_- )/",
  22: "\\(^.^)/",
  23: "\\( ^.^)/",
  24: "\\(^.^ )/",
  25: "\\(*^.^*)/",
  26: "\\( *^.^)/",
  27: "\\(^.^* )/",
  28: "\\($_$)/",
  29: "\\( $_$)/",
  30: "\\($_$ )/",
  31: "\\( P_P)/",
  32: "\\( D_D)/",
  33: "\\(X_X)/",
  34: "\\( X_X)/",
  35: "\\(X_X )/",
  36: "\\(x_x)/",
  37: "\\( x_x)/",
  38: "\\(x_x )/",
  39: "\\([]_[])/",
  40: "\\( -[]_[])/",
  41: "\\([]_[]- )/",
  42: "\\({}_{})/",
  43: "\\( -{}_{})/",
  44: "\\({}_{}- )/",
  45: `\\(O_o)/`,
  46: "\\(o_O)/",
  47: "(/ 0_0)/",
  48: "\\(0_0 \\)",
  49: "(/ o_o)/",
  50: "\\(o_o \\)",
  51: "(/ O_O)/",
  52: "\\(O_O \\)",
  53: "\\(O_O! \\)",
  54: "(/ !O_O)/",
  55: "(/ *^_^)/",
  56: "\\(^_^* \\)",
  57: "(/ ^_^)/",
  58: "\\(^_^ \\)",
  59: "(/ -_-)/",
  60: "\\(-_- \\)",
  61: "(/ ^.^)/",
  62: "\\(^.^ \\)",
  63: "(/ *^.^)/",
  64: "\\(^.^* \\)",
  65: "(/ $_$)/",
  66: "\\($_$ \\)",
  67: "(/ P_P)/",
  68: "(/ D_D)/",
  69: "(/ X_X)/",
  70: "\\(X_X \\)",
  71: "(/ x_x)/",
  72: "\\(x_x \\)",
  73: "(/ -[]_[])/",
  74: "\\([]_[]- \\)",
  75: "(/ -{}_{})/",
  76: "\\({}_{}- \\)",
};


const confusedEmoticons = {
  1: "`\\(0_0)/`",
  2: "`\\( 0_0)/`",
  3: "`\\(0_0 )/`",
  4: "`\\(o_o)/`",
  5: "`\\( o_o)/`",
  6: "`\\(o_o )/`",
  7: "`\\(O_O)/`",
  8: "`\\( O_O)/`",
  9: "`\\(O_O )/`",
  10: "`\\(+_+)/`",
  11: "`\\(O_O! )/`",
  12: "`\\( !O_O)/`",
  13: "`\\(*^_^*)/`",
  14: "`\\( *^_^)/`",
  15: "`\\(^_^* )/`",
  16: "`\\(^_^)/`",
  17: "`\\( ^_^)/`",
  18: "`\\(^_^ )/`",
  19: "`\\(-_-)/`",
  20: "`\\( -_-)/`",
  21: "`\\(-_- )/`",
  22: "`\\(^.^)/`",
  23: "`\\( ^.^)/`",
  24: "`\\(^.^ )/`",
  25: "`\\(*^.^*)/`",
  26: "`\\( *^.^)/`",
  27: "`\\(^.^* )/`",
  28: "`\\($_$)/`",
  29: "`\\( $_$)/`",
  30: "`\\($_$ )/`",
  31: "`\\( P_P)/`",
  32: "`\\( D_D)/`",
  33: "`\\(X_X)/`",
  34: "`\\( X_X)/`",
  35: "`\\(X_X )/`",
  36: "`\\(x_x)/`",
  37: "`\\( x_x)/`",
  38: "`\\(x_x )/`",
  39: "`\\([]_[])/`",
  40: "`\\( -[]_[])/`",
  41: "`\\([]_[]- )/`",
  42: "`\\({}_{})/`",
  43: "`\\( -{}_{})/`",
  44: "`\\({}_{}- )/`",
  45: "`\\(O_o)/`",
  46: "`\\(o_O)/`",
  47: "(/` 0_0)/`",
  48: "`\\(0_0 `)",
  49: "(/` o_o)/`",
  50: "`\\(o_o `\\)",
  51: "(/` O_O)/`",
  52: "`\\(O_O `\\)",
  53: "`\\(O_O! `\\)",
  54: "(/` !O_O)/`",
  55: "(/` *^_^)/`",
  56: "`\\(^_^* `\\)",
  57: "(/` ^_^)/`",
  58: "`\\(^_^ `\\)",
  59: "(/` -_-)/`",
  60: "`\\(-_- `\\)",
  61: "(/` ^.^)/`",
  62: "`\\(^.^ `\\)",
  63: "(/` *^.^)/`",
  64: "`\\(^.^* `\\)",
  65: "(/` $_$)/`",
  66: "`\\($_$ `\\)",
  67: "(/` P_P)/`",
  68: "(/` D_D)/`",
  69: "(/` X_X)/`",
  70: "`\\(X_X `\\)",
  71: "(/` x_x)/`",
  72: "`\\(x_x `\\)",
  73: "(/` -[]_[])/`",
  74: "`\\([]_[]- `\\)",
  75: "(/` -{}_{})/`",
  76: "`\\({}_{}- `\\)",
};

const dancingEmoticons = {
  1: "~(0_0)~",
  2: "(~ 0_0)~",
  3: "~(0_0 ~)",
  4: "~(o_o)~",
  5: "(~ o_o)~",
  6: "~(o_o ~)",
  7: "~(O_O)~",
  8: "(~ O_O)~",
  9: "~(O_O ~)",
  10: "~(+_+)~",
  11: "~(O_O! ~)",
  12: "(~ !O_O)~",
  13: "~(*^_^*)~",
  14: "(~ *^_^)~",
  15: "~(^_^* ~)",
  16: "~(^_^)~",
  17: "(~ ^_^)~",
  18: "~(^_^ ~)",
  19: "~(-_-)~",
  20: "(~ -_-)~",
  21: "~(-_- ~)",
  22: "~(^.^)~",
  23: "(~ ^.^)~",
  24: "~(^.^ ~)",
  25: "~(*^.^*)~",
  26: "(~ *^.^)~",
  27: "~(^.^* ~)",
  28: "~($_$)~",
  29: "(~ $_$)~",
  30: "~($_$ ~)",
  31: "(~ P_P)~",
  32: "(~ D_D)~",
  33: "~(X_X)~",
  34: "(~ X_X)~",
  35: "~(X_X ~)",
  36: "~(x_x)~",
  37: "(~ x_x)~",
  38: "~(x_x ~)",
  39: "~([]_[])~",
  40: "(~ -[]_[])~",
  41: "~([]_[]- ~)",
  42: "~({}_{})~",
  43: "(~ -{}_{})~",
  44: "~({}_{}- ~)",
  45: `~(O_o)~`,
  46: "~(o_O)~",
};

export {
  classicEmoticons,
  faceEmoticons,
  smileEmoticons,
  roundFaceEmoticons,
  squareFaceEmoticons,
  curlyFaceEmoticons,
  straightFaceEmoticons,
  hugEmoticons,
  confusedEmoticons,
  dancingEmoticons,
};
