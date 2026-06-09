<?php

use PHPUnit\Framework\TestCase;

require_once __DIR__ . '/../calculator.php';

class CalculatorTest extends TestCase
{
    protected Calculator $calculator;

    protected function setUp(): void
    {
        $this->calculator = new Calculator();
    }

    public function testAddition(): void
    {
        $this->assertEquals(5, $this->calculator->calculate('2+3'));
    }

    public function testSoustraction(): void
    {
        $this->assertEquals(1, $this->calculator->calculate('4-3'));
    }

    public function testMultiplication(): void
    {
        $this->assertEquals(12, $this->calculator->calculate('4*3'));
    }

    public function testDivision(): void
    {
        $this->assertEquals(4, $this->calculator->calculate('12/3'));
    }

    public function testDivisionParZero(): void
    {
        $this->expectException(RuntimeException::class);
        $this->calculator->calculate('100/0');
    }
}
