/**
 * > *A API for store functions to execute later.*
 */
declare module "functions_julman_api" {
    class Functions {
        private list: Map<string, (this: Functions, name: string) => void>;

        /**
         * Add function
         * @param name The name for the function
         * @param callback The code to execute when function called
         * @throws Can throw a "*TypeError*" if the name is alrady use
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#addname-callback-go-to-source)
         */
        public add(name: string, callback: (this: Functions, name: string) => void): void;
        /**
         * Add function
         * @param name The name for the function
         * @param callback The code to execute when function called
         * @throws Can throw a "*TypeError*" if the name is alrady use
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#addname-callback-go-to-source)
         */
        public static add(name: string, callback: (this: typeof Functions, name: string) => void): void;

        /**
         * Remove a function
         * @param name The function's name to remove
         * @returns {(this: Functions, name: string) => void} The function removed
         * @throws Can throw "*TypeError*" if the function not exist
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#removename-go-to-source)
         */
        public remove(name: string): (this: Functions, name: string) => void;
        /**
         * Remove a function
         * @param name The function's name to remove
         * @returns {(this: typeof Functions, name: string) => void} The function removed
         * @throws Can throw "*TypeError*" if the function not exist
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#removename-go-to-source)
         */
        public static remove(name: string): (this: typeof Functions, name: string) => void;

        /**
         * Execute a function
         * @param name The function's name to execute
         * @throws Can throw "*TypeError*" if the function not exist
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#executename-go-to-source)
         */
        public execute(name: string): void;
        /**
         * Execute a function
         * @param name The function's name to execute
         * @throws Can throw "*TypeError*" if the function not exist
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#executename-go-to-source)
         */
        public static execute(name: string): void;

        /**
         * Clear functions' list
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#clear-go-to-source)
         */
        public clear(): void;
        /**
         * Clear functions' list
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#clear-go-to-source)
         */
        public static clear(): void;

        /**
         * Create a new instance of Functions ([view doc](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions))
         * @returns A new instance of Functions ([view doc](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions))
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#instance-go-to-source)
         */
        public static instance(): Functions;

        
        /**
         * Change function's executor
         * @param name The function name to edit
         * @param new_callback The new function's code
         * @returns The old function's code
         * @throws Can throw a "*TypeError*" if the name is alrady use
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#replacename-callback-go-to-source)
         */
        public replace(name: string, new_callback: (this: Functions, name: string) => void): (this: Functions, name: string) => void;

        /**
         * Change function's executor
         * @param name The function name to edit
         * @param new_callback The new function's code
         * @returns The old function's code
         * @throws Can throw a "*TypeError*" if the name is alrady use
         * @description See on [GitHub](https://github.com/MinecraftJulMan/functions_julman_api/wiki/Functions#replacename-callback-go-to-source)
         */
        public static replace(name: string, new_callback: (this: typeof Functions, name: string) => void): (this: typeof Functions, name: string) => void;
    }
}