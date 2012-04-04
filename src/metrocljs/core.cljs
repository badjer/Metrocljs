(ns metrocljs.core)
(let [	txt (+ 2 2)
		msg (new Windows.UI.Popups.MessageDialog txt)]
	(.showAsync msg))
