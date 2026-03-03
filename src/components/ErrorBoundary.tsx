import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}


export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.error('[ErrorBoundary] Caught error:', error, info.componentStack);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
    };

    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    padding: '24px',
                    textAlign: 'center',
                    fontFamily: 'system-ui, sans-serif',
                }}>
                    <div style={{ fontSize: '48px', marginBottom: '16px' }}>⚠️</div>
                    <h2 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px', color: '#282828' }}>
                        Что-то пошло не так
                    </h2>
                    <p style={{ fontSize: '16px', color: '#6C757D', marginBottom: '24px', maxWidth: '400px' }}>
                        Произошла непредвиденная ошибка. Попробуйте перезагрузить страницу.
                    </p>
                    <button
                        onClick={this.handleReset}
                        style={{
                            padding: '12px 32px',
                            fontSize: '16px',
                            fontWeight: 500,
                            backgroundColor: '#282828',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '14px',
                            cursor: 'pointer',
                        }}
                    >
                        Попробовать снова
                    </button>
                    {import.meta.env.DEV && this.state.error && (
                        <pre style={{
                            marginTop: '24px',
                            padding: '16px',
                            backgroundColor: '#f8f9fa',
                            borderRadius: '8px',
                            fontSize: '12px',
                            color: '#DC3545',
                            maxWidth: '600px',
                            overflow: 'auto',
                            textAlign: 'left',
                        }}>
                            {this.state.error.message}
                            {'\n'}
                            {this.state.error.stack}
                        </pre>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}
