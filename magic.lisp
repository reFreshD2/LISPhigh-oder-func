(setq myMagicNumber 5)
(setq myList '(1 3 4 2 4 6))
(defun myPlus (arg)
    (+ arg myMagicNumber)
)
(defun myMult (arg)
    (* arg myMagicNumber)
)
(defun myList (arg)
    (list arg myMagicNumber)
)
(defun MAGIC1 (list)
    (mapcar 'myPlus list)
)
(defun MAGIC2 (list)
    (mapcar 'myMult list)
)
(defun MAGIC3 (list)
    (mapcar 'myList list)
)
(print(MAGIC1 myList))
(print(MAGIC2 myList))
(print(MAGIC3 myList))