# My Monorepo

This is a monorepo setup using pnpm, containing multiple packages that can be developed and managed together.

## Packages

The monorepo includes the following packages:

- **package-a**: 
  - Located in `packages/package-a`
  - Entry point: `packages/package-a/src/index.ts`
  - Contains its own dependencies and configuration.

- **package-b**: 
  - Located in `packages/package-b`
  - Entry point: `packages/package-b/src/index.ts`
  - Contains its own dependencies and configuration.

## Getting Started

To get started with this monorepo, ensure you have [pnpm](https://pnpm.io/) installed. You can install it globally using npm:

```
npm install -g pnpm
```

### Installation

Run the following command in the root of the monorepo to install all dependencies:

```
pnpm install
```

### Running Packages

Each package can be run independently. Navigate to the desired package directory and use the scripts defined in its `package.json`. For example:

```
cd packages/package-a
pnpm run <script-name>
```

### Development

You can develop each package in isolation or work on them together. Changes in one package can be reflected in others if they depend on each other.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.