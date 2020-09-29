import { add } from "../src";

/**
 * > *A API for store functions to execute later.*
 */
declare module "npm_functions" {
    class Functions {
        /**
         * 
         * @param name The name for the function ***(arg0 = String -> the function name)***
         * @param callback The code to execute when function called
         * @author JulMan (MinecraftJulMan) ---> https://github.com/MinecraftJulMan
         * @throws Can throw a "*TypeError*" if the name is alrady use
         * @license ISE -> https://github.com/MinecraftJulMan/NPM-Functions/LICENCE
         */
        public static add(name: String, callback: function(String): void): void;

        /**
         * 
         * @param name The function's name to remove
         * @returns {function(String): void} The function removed
         * @author JulMan (MinecraftJulMan) ---> https://github.com/MinecraftJulMan
         * @throws Can throw "*TypeError*" if the function not exist
         * @license ISE -> https://github.com/MinecraftJulMan/NPM-Functions/LICENCE
         */
        public static remove(name: String): function(String): void;
    }
}