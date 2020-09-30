import { add, instance } from "../src";

/**
 * > *A API for store functions to execute later.*
 */
declare module "functions_julman_api" {
    class Functions {
        /**
         * Add function
         * @param name The name for the function ***(arg0 = String -> the function name)***
         * @param callback The code to execute when function called
         * @author JulMan (MinecraftJulMan) ---> https://github.com/MinecraftJulMan
         * @throws Can throw a "*TypeError*" if the name is alrady use
         * @license ISE -> https://github.com/MinecraftJulMan/functions_julman_api/blob/master/LICENCE
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#addname-callback-go-to-source)
         */
        public add(name: String, callback: function(String): void): void;

        /**
         * Remove a function
         * @param name The function's name to remove
         * @returns {function(String): void} The function removed
         * @author JulMan (MinecraftJulMan) ---> https://github.com/MinecraftJulMan
         * @throws Can throw "*TypeError*" if the function not exist
         * @license ISE -> https://github.com/MinecraftJulMan/functions_julman_api/blob/master/LICENCE
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#removename-go-to-source)
         */
        public remove(name: String): function(String): void;

        /**
         * Execute a function
         * @param name The function's name to execute
         * @author JulMan (MinecraftJulMan) ---> https://github.com/MinecraftJulMan
         * @throws Can throw "*TypeError*" if the function not exist
         * @license ISE -> https://github.com/MinecraftJulMan/functions_julman_api/blob/master/LICENCE
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#executename-go-to-source)
         */
        public execute(name: String): void;

        /**
         * Clear functions' list
         * @author JulMan (MinecraftJulMan) --> https://github.com/MinecraftJulMan
         * @license ISE -> https://github.com/MinecraftJulMan/functions_julman_api/blob/master/LICENCE
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#clear-go-to-source)
         */
        public clear(): void;

        /**
         * Create a new instance of Functions ([view doc](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions))
         * @returns A new instance of Functions ([view doc](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions))
         * @author JulMan (MinecraftJulMan) --> https://github.com/MinecraftJulMan
         * @license ISE -> https://github.com/MinecraftJulMan/functions_julman_api/blob/master/LICENCE
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#instance-go-to-source)
         */
        public static instance(): Functions;
    }
}