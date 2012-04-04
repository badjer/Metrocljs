(defproject metrocljs "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :dev-dependencies [[lein-cljsbuild "0.1.6"]]
  :cljsbuild { :builds [{ :source-path "src"
  						  :compiler { :output-to "lib/cljs.js"
						  			  :externs ["externs.js"]
						  			  :optimizations :advanced
									  :pretty-print true}}]})
